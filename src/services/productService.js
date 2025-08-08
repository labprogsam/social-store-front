import api from './api';

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get('/products/by-category', { 
      params: { categoryId: categoryId } 
    });
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};