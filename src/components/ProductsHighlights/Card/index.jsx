import {
  CardContainer,
  ImageContainer,
  ProductImage,
  DetailsContainer,
  ProductName,
  ProductPrice,
} from "./styles.js";

function ProductCard({ produto, onClick }) {
  return (
    <CardContainer onClick={onClick}>
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
