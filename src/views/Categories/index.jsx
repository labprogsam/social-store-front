// src/views/Categories/index.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Pathing,
  StyledMainContainer,
  StyledRow,
  StyledListProducts
} from './styles.js';
import {
  SidebarCategory,
  ProductCategory,
} from '../../components';
import { getProducts } from '../../services/products.js'; // Importe o serviço

const Categories = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const mapping = [
    'Artesanato e Produtos', 'Alimentos e Bebidas', 'Roupas e Acessórios',
    'Arte e Cultura', 'Produtos Sustentáveis', 'Produtos de Higiene e Cosméticos Naturais',
    'Itens de Decoração', 'Outros'
  ];

  // Carrega os produtos do nosso serviço
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <StyledMainContainer>
      <Pathing>Home / Categorias / <span data-testid="span-category">{mapping[id]}</span></Pathing>
      <StyledRow>
        <SidebarCategory id={id} />
        <StyledListProducts>
          <h2 data-testid="main-title" id="main-title">{mapping[id]}</h2>
          {products.map((data, index) => (
            // Adicione o Link aqui, envolvendo o ProductCategory
            <Link to={`/produtos/${data.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProductCategory data={data} id={id} />
            </Link>
          ))}
        </StyledListProducts>
      </StyledRow>
    </StyledMainContainer>
  )
}

export default Categories;
