// src/views/Product/index.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/products.js'; // Nosso serviço de dados
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
} from './styles'; // Importando os estilos do ficheiro local
import { TextField, MenuItem } from '@mui/material';

const ProductView = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Busca o produto usando a função do nosso serviço
    const productData = getProductById(id);
    setProduct(productData);
    // Se o produto for encontrado, define a primeira imagem como a ativa
    if (productData) {
      setActiveImage(productData.images[0]);
    }
  }, [id]); // O efeito é executado sempre que o 'id' da URL mudar

  // Se o produto ainda não foi carregado ou não foi encontrado, mostra uma mensagem
  if (!product) {
    return <ProductDetailContainer><h1>Produto não encontrado!</h1></ProductDetailContainer>;
  }

  // Renderiza a página com os dados do produto
  return (
    <ProductDetailContainer>
      <Breadcrumb>
        <Link to="/home">Home</Link> / Produtos / <span>{product.title}</span>
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
                {/* Futuramente, pode mapear e criar Chips do MUI aqui */}
                {product.categories.join(', ')}
            </div>
        </SpecContent>
      </SpecSection>
    </ProductDetailContainer>
  );
};

export default ProductView;
