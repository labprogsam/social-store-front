import productsData from "./ProductsData";
import ProductCard from "./Card";
import {
  SectionContainer,
  MainContentContainer,
  TitleBar,
  TitleText,
  ProductsFlexContainer,
} from './styles.js';

function ProductsHighlights({ref}) {

  return (
    <SectionContainer ref={ref}>
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
              onClick={() => handleCardClick(produto.nome)}
            />
          ))}
        </ProductsFlexContainer>    
      </MainContentContainer>  
    </SectionContainer>  
  );
}

export default ProductsHighlights;
