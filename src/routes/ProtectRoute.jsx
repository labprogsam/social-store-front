import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserData } from "../services/auth";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { data, isFetched, isPending, isError, error } = useUserData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isPending) {
      if (!data && isFetched) navigate("/login", { state: { from: location } });
    }
  }, [data, navigate, location, isFetched, isPending]);

  if (isError) {
    if (error.response && error.response.status === 401) {
      toast.error("Sessão expirada, por favor, faça login novamente.");
    } else {
      toast.error("Erro de conexão com servidor.");
    }
  }

  return children;
}