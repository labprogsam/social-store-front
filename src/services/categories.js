import api from "./api.js";

export const getProducts = async (id, skip) => {
  const response = await api.get(`/api/categories/${id}/products?skip=${skip}`);
  return response.data;
};

