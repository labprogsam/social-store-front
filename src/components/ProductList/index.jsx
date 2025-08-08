import productsData from '../ProductsHighlights/ProductsData.js';
import ProductCard from '../ProductsHighlights/Card/index.jsx';
import TitleBar from "./TitleBar";
import Button from "./Button";

import {
  PageContainer,
  MainContentWrapper,
  ProductsFlexContainer,
  ViewMoreButtonContainer
} from './styles.js';

function ProductList({ isCreate=false }) {
  const handleViewMoreClick = () => {
    alert("Visualizar mais produtos!");
    // Logica para carregar mais produtos aqui!
  };

  return (
    <PageContainer>
      <MainContentWrapper>
        <TitleBar title="Nossos Produtos" isCreate={isCreate} />

        <ProductsFlexContainer>
          {productsData.map((product) => (
            <ProductCard
              isEditable={isCreate}
              key={product.id}
              produto={product}
            />
          ))}
        </ProductsFlexContainer>
        <ViewMoreButtonContainer>
          <Button onClick={handleViewMoreClick}>Visualizar mais</Button>
        </ViewMoreButtonContainer>
      </MainContentWrapper>
    </PageContainer>
  );
}

export default ProductList;