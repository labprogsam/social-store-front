import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Pathing,
  StyledMainContainer,
  StyledRow,
  StyledListProducts
} from './styles.js';
import { SidebarCategory, ProductCategory } from '../../components';
import { getProductsByCategory } from '../../services/productService';

const Categories = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryMapping = [
    { id: 0, name: 'Artesanato e Produtos' },
    { id: 1, name: 'Alimentos e Bebidas' },
    { id: 2, name: 'Roupas e Acessórios' },
    { id: 3, name: 'Arte e Cultura' },
    { id: 4, name: 'Produtos Sustentáveis' },
    { id: 5, name: 'Produtos de Higiene e Cosméticos Naturais' },
    { id: 6, name: 'Itens de Decoração' },
    { id: 7, name: 'Outros' }
  ];

  // Encontra a categoria atual com base no ID
  const currentCategory = categoryMapping.find(cat => cat.id === parseInt(id));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Passa o ID da categoria para a função getProductsByCategory
        const productsData = await getProductsByCategory(currentCategory.id);
        console.log('Dados recebidos da API:', productsData); 
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id, currentCategory.id]);

  if (error) return <div>Erro ao carregar produtos: {error}</div>;
  if (loading) return <div>Carregando...</div>;

  return (
    <StyledMainContainer>
      <Pathing>
        Home / Categorias / <span data-testid="span-category">{currentCategory.name}</span>
      </Pathing>
      
      <StyledRow>
        <SidebarCategory id={id} />
        
        <StyledListProducts>
          <h2 data-testid="main-title" id="main-title">{currentCategory.name}</h2>
          
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCategory key={product.id} data={product} />
            ))
          ) : (
            <div>Nenhum produto encontrado nesta categoria</div>
          )}
        </StyledListProducts>
      </StyledRow>
    </StyledMainContainer>
  );
};

export default Categories;