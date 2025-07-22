// src/views/ProductDetail/index.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/products.js'; // Nosso novo serviço
import {
  ProductDetailContainer,
  Breadcrumb,
  MainContent,
  LeftColumn,
  MainImage,
  ThumbnailContainer,
  Thumbnail,
  RightColumn,
  ProductName,
  ProductPrice,
  ProductDescription,
  OngLink,
  PurchaseSection,
  BuyButton,
  SpecSection,
  SpecTitle,
  SpecContent
} from './styles';
import { TextField, MenuItem } from '@mui/material'; // Para o seletor de quantidade

const ProductDetailView = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productData = getProductById(id);
    setProduct(productData);
    if (productData) {
      setActiveImage(productData.images[0]);
    }
  }, [id]);

  if (!product) {
    return <ProductDetailContainer><h1>Produto não encontrado!</h1></ProductDetailContainer>;
  }

  return (
    <ProductDetailContainer>
      <Breadcrumb>
        <Link to="/home">Home</Link> / <Link to="/produtos">Produtos</Link> / <span>{product.title}</span>
      </Breadcrumb>
      <MainContent>
        <LeftColumn>
          <MainImage src={activeImage} alt={product.title} />
          <ThumbnailContainer>
            {product.images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                isActive={activeImage === image}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </ThumbnailContainer>
        </LeftColumn>
        <RightColumn>
          <ProductName>{product.title.toUpperCase()}</ProductName>
          <ProductPrice>R$ {product.price.toFixed(2).replace('.', ',')}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <OngLink>
            Feito cariosamente por <a href={`/app/ongs/${product.ong_id}`}>{product.ong}</a>
          </OngLink>

          <PurchaseSection>
            <TextField
                select
                label="Quantidade"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                variant="outlined"
                sx={{ minWidth: 150 }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <BuyButton>Comprar</BuyButton>
          </PurchaseSection>
        </RightColumn>
      </MainContent>

      <SpecSection>
        <SpecTitle>Especificações</SpecTitle>
        <SpecContent>
            <div>
                <h4>Dimensões:</h4>
                <ul>
                    {product.specifications.dimensions.map((dim, i) => <li key={i}>-{dim}</li>)}
                </ul>
                <h4>Materiais:</h4>
                <ul>
                    {product.specifications.materials.map((mat, i) => <li key={i}>-{mat}</li>)}
                </ul>
            </div>
            <div>
                <h4>Categorias:</h4>
                {/* Aqui você pode usar o componente Chip do MUI se quiser */}
                {product.categories.join(', ')}
            </div>
        </SpecContent>
      </SpecSection>
    </ProductDetailContainer>
  );
};

export default ProductDetailView;