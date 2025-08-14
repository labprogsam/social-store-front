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
import { ProductCategory } from '../../components'
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

	const [product, setProduct] = useState(
		{
			"title": "Boneca de pano",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
			"price": 31.01,
			"images": [
				"https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
				"https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
				"https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
				"https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
			],
			"categories": [
				1, 2, 3
			],
			"specification": "Lorem Ipsum is simply dummy text of the printing",
			"phone": 5581996089701,
			"ong": "Instituto Dia Melhor",
			"ong_id": 1,
		}
	);
	const [activeImage, setActiveImage] = useState("https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg");
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);
	const [chipData, setChipData] = useState([
		{
			id: 0,
			name: "Artesanato e Produtos",
		},
		{
			id: 1,
			name: "Alimentos e Bebidas",
		},
		{
			id: 2,
			name: "Roupas e Acessórios",
		},
		{
			id: 3,
			name: "Arte e Cultura",
		},
		{
			id: 4,
			name: "Produtos Sustentáveis",
		},
		{
			id: 5,
			name: "Higiene e Cosméticos",
		},
		{
			id: 6,
			name: "Itens de decoração",
		},
		{
			id: 7,
			name: "Outros",
		},
	]);

	const ListItem = styled("li")(({ theme }) => ({
		margin: theme.spacing(0.5),
	}));

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
						value={product.description}
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
							{product.categories.map((cat) => {
								return (
									<ListItem key={cat}>
										<Chip
											label={chipData[cat].name}
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