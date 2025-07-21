import React, { useState } from 'react'; 

import productsData from "./ProductList.data";
import ProductCard from "./ProductCard";
import TitleBar from "./TitleBar";
import Button from "./Button";

import {
    PageContainer,
    MainContentWrapper,
    ProductsFlexContainer,
    ViewMoreButtonContainer
} from './ProductList.styles';

function ProductList() {

    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleCardClick = (id) => {
        setSelectedProductId(id);
  };


    const handleViewMoreClick = () => {
        alert("Visualizar mais produtos!");
        // Logica para carregar mais produtos aqui!
    };

    return(
        <PageContainer>
            <MainContentWrapper>
                <TitleBar title="Nossos Produtos" />

                <ProductsFlexContainer>
                    {productsData.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isSelected={selectedProductId == product.id}
                            onClick={() => handleCardClick(product.id)}
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