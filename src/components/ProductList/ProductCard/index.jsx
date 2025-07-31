import {
    CardWrapper,
    ImageContainer,
    ProductImage,
    DetailsContainer,
    ProductName,
    ProductPrice

} from './ProductCard.styles';

function ProductCard({ product }){
    return(
        <CardWrapper>
            <ImageContainer>
                <ProductImage src={product.imagem} alt={product.nome} />
            </ImageContainer>

            <DetailsContainer>
                <ProductName>{product.nome}</ProductName>
                <ProductPrice>{product.preco}</ProductPrice>
            </DetailsContainer>
        </CardWrapper>
    );
}

export default ProductCard;