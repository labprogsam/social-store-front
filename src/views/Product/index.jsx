// src/views/Product/index.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/products';
import { styled } from '@mui/material/styles';
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import { ProductCategory } from '../../components';
import { getProduct } from "../../services/ong";
import {
  StyledMain,
  TitleBar,
  TitleText,
  StyledTexts,
  StyledContainer
} from './styles.js';

export const categoryMapping = [
  'Artesanato e Produtos',
  'Alimentos e Bebidas',
  'Roupas e Acessórios',
  'Arte e Cultura',
  'Produtos Sustentáveis',
  'Produtos de Higiene e Cosméticos Naturais',
  'Itens de Decoração',
  'Outros'
]

const ProductView = () => {
  // useParams pega os parâmetros da URL, no nosso caso, o `productId`
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [chipData, setChipData] = useState([
    {
      id: 1,
      name: "Artesanato e Produtos",
    },
    {
      id: 2,
      name: "Alimentos e Bebidas",
    },
    {
      id: 3,
      name: "Roupas e Acessórios",
    },
    {
      id: 4,
      name: "Arte e Cultura",
    },
    {
      id: 5,
      name: "Produtos Sustentáveis",
    },
    {
      id: 6,
      name: "Higiene e Cosméticos",
    },
    {
      id: 7,
      name: "Itens de decoração",
    },
    {
      id: 8,
      name: "Outros",
    },
  ]);

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  useEffect(() => {
    if (!productId) return
    async function fetchProduct() {
      const response = await getProduct(productId);

      setProduct(response);
    }

    fetchProduct();
  }, [productId])

  // Se o produto foi encontrado, renderizamos a página
  return (
    <StyledMain>
      <StyledContainer>

        <ProductCategory data={product} />

        <TitleBar>
          <TitleText>
            Especificações
          </TitleText>
        </TitleBar>

        <StyledTexts>
          <TextField
            required
            multiline
            minRows={9}
            margin="normal"
            label="Descrição"
            value={product?.description}
            variant="outlined"
            fullWidth
            disabled
            className="description"
            sx={{
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'unset',
                color: 'inherit',
              },
            }}
          />
          <Box position="relative" display="inline-block" sx={{ marginTop: 2, width: '100%', height: '100%' }}>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: -10,
                left: 16,
                backgroundColor: 'white',
                px: 0.5,
                fontSize: '0.75rem',
                color: 'rgba(0, 0, 0, 0.6)'
              }}
            >Categorias
            </Typography>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {product?.categories?.map((data) => {
                return (
                  <ListItem key={data.id}>
                    <Chip
                      label={data.value}
                    />
                  </ListItem>
                );
              })}
            </Paper>
          </Box>
        </StyledTexts>
      </StyledContainer>
    </StyledMain>
  );
}

export default ProductView;