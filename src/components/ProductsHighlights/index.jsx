import { useState } from "react";
import productsData from "./ProductsData";
import ProductCard from "./ProductCard";
import {
  SectionContainer,
  MainContentContainer,
  TitleBar,
  TitleText,
  ProductsFlexContainer,
} from './ProductsHighlights.styles';

function ProductsHighlights() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (ProductName) => {
    setSelectedProduct(ProductName);
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
          {productsData.map((produto, index) => (
            <ProductCard 
              key={index}
              produto={produto}
              isSelected={selectedProduct === produto.nome}
              onClick={() => handleCardClick(produto.nome)}
            />
          ))}
        </ProductsFlexContainer>    
      </MainContentContainer>  
    </SectionContainer>  
  );
}

export default ProductsHighlights;
