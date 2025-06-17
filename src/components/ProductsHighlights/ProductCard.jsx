import React from "react";
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  DetailsContainer,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles";

function ProductCard({ produto, isSelected, onClick }) {
  return (
    <CardContainer $isSelected={isSelected} onClick={onClick}>
      <ImageContainer>
        <ProductImage src={produto.imagem} alt={produto.nome} />
      </ImageContainer>

      <DetailsContainer>
        <ProductName>{produto.nome}</ProductName>
        <ProductPrice>{produto.preco}</ProductPrice>
      </DetailsContainer>
    </CardContainer>
  );
}

export default ProductCard;
