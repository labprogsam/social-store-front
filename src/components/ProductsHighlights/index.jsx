// src/components/ProductsHighlights/index.jsx
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import productsData from "./ProductsData";
import ProductCard from "./Card";
import {
  SectionContainer,
  MainContentContainer,
  TitleBar,
  TitleText,
  ProductsFlexContainer,
} from './styles.js';

function ProductsHighlights() {
  const navigate = useNavigate(); // Instancie o hook

  // Função que será chamada quando um card for clicado
  const handleCardClick = (productId) => {
    // Se o produto não tiver um ID, não faz nada
    if (!productId) {
      console.warn("Este produto não possui um ID para navegação.");
      return;
    }
    // Navega para a página do produto com o ID correspondente
    navigate(`/produtos/${productId}`);
  };

  return (
    <SectionContainer>
      <MainContentContainer>
        <TitleBar>
          <TitleText>
            Produtos em Destaque
          </TitleText>
        </TitleBar>
  
        <ProductsFlexContainer>
          {productsData.map((produto) => (
            <ProductCard 
              key={produto.id} // Use o ID como chave
              produto={produto}
              // Passe a função de clique para o componente ProductCard
              onClick={() => handleCardClick(produto.id)}
            />
          ))}
        </ProductsFlexContainer>    
      </MainContentContainer>  
    </SectionContainer>  
  );
}

export default ProductsHighlights;