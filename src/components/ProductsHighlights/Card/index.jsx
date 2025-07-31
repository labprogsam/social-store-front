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
  const [reference, setReference] = useState(`ong/${produto?.id}`)
  useEffect(() => {
    if(isEditable) setReference(`produto/${produto?.id}`)
  }, [isEditable]);

  return (
    <CardContainer href={reference}>
      <ImageContainer>
        <ProductImage src={produto.image} alt={produto.name} />
      </ImageContainer>

      <DetailsContainer>
        <ProductName>{produto.name}</ProductName>
        <ProductPrice>{produto.price}</ProductPrice>
      </DetailsContainer>
    </CardContainer>
  );
}

export default ProductCard;
