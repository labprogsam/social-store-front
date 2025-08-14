import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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