import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUserData } from "./auth.js";
import toast from "react-hot-toast";
import api from "./api.js";

export const getProfile = async (id) => {
  const response = await api.get(`/api/ongs?id=${id}`);
  return response.data;
};

export const updateProfile = async (content) => {
  const response = await api.put(`/api/ongs`, content);
  return response.data;
}; 

const postSolicitacoes = async (content) => {
  const response = await api.post("/api/solicitacao", content, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

const patchSolicitacoes = async (content) => {
  const id = content.get("id");
  content.delete("id");
  const response = await api.patch("/api/solicitacao", content, {
    params: { id: id },
    headers: { "Content-Type": "multipart/form-data" },

  });
  return response.data;
};
const deleteSolicitacoes = async (id) => {

  const response = await api.delete("/api/solicitacao", {
    params: { id: id },
  });
  return response.data;
};

// para erros no useQuery
export const useHandleError = () => {
  const queryClient = useQueryClient();
  return (error) => {
    if (error?.response && error?.response.status === 401) {
      queryClient.setQueryData(["user"], null);
      toast.error("Sessão expirada, por favor, faça login novamente.");
    } else {
      toast.error(
        error?.response?.data?.message || "Erro ao carregar!",
      );
    }
  };
};

