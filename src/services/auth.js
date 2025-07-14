import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";
import toast from "react-hot-toast";

//Requisições

const fetchLogin = async (credentials) => {
  const response = await api.post("/api/login", credentials, {
    withCredentials: true, //  Send cookies with request
  });
  console.log('Credenciais: ', credentials);
  return response.data;
};
const fetchLogout = async () => {
  const response = await api.post("/api/logout"); // Adicionado /api
  return response.data;
};
const fetchUserData = async () => {
  const response = await api.get("/api/login"); // Adicionado /api
  return response.data;
};

//Processamento das requisições com ReactQuery

const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
    onError: (error) => {
      // Verifica se o erro possui uma resposta e um código de status 401
      if (error.response && error.response.status === 401) {
        queryClient.setQueryData(["user"], null);
        toast.error("Email ou senha incorretos. Tente novamente.");
      } else {
        // Para outros erros, exibe uma mensagem de erro geral
        toast.error(
          error?.response?.data?.message ||
            "Erro ao conectar com servidor. Tente novamente.",
        );
      }
    },
  });
};
const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchLogout,
    onSettled: () => {
      queryClient.setQueryData(["user"], null);
    },
  });
};

const useUserData = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
    staleTime: 1000 * 60 * 10,
    retry: false,
    throwOnError: () => {
      // Se receber um erro 401 (não autorizado), define o usuário como não autenticado
      queryClient.setQueryData(["user"], null);
    },
  });
};

export { useUserData, useLogin, useLogout };