import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  DetailsContainer,
  ProductName,
  ProductPrice,
} from "./styles.js";

function ProductCard({ produto, isEditable=false }) {

  const [reference, setReference] = useState(`${import.meta.env.VITE_FRONT_URL}/produto/${produto?.id}`)
  useEffect(() => {
    if(isEditable) setReference(`${import.meta.env.VITE_FRONT_URL}/ong/produto/${produto?.id}`)
  }, [isEditable]);

  return (
    <CardContainer href={reference}>
      <ImageContainer>
        <ProductImage src={produto?.images[0]} alt={produto?.title} />
      </ImageContainer>

      <DetailsContainer>
        <ProductName>{produto?.title}</ProductName>
        <ProductPrice>R$ {produto?.price.toFixed(2).replace('.', ',')}</ProductPrice>
      </DetailsContainer>
    </CardContainer>
  );
}

export default ProductCard;
