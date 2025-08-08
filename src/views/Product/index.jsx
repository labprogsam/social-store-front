// src/views/Product/index.jsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/products';
import styles from './styles.module.css';
import { styled } from '@mui/material/styles';
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

	const ListItem = styled("li")(({ theme }) => ({
		margin: theme.spacing(0.5),
	}));

	const [product, setProduct] = useState(
		{
			"title": "Meu produto 11",
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
			"specification": "Lorem Ipsum is simply dummy text of the printing"
		}
	);
	const [activeImage, setActiveImage] = useState("https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg");
	const [quantity, setQuantity] = useState(1);
	const [loading, setLoading] = useState(true);

	// useEffect será executado quando o componente for montado ou quando o productId mudar
	useEffect(() => {
		setLoading(true);
		const data = getProductById(productId);
		if (data) {
			setProduct(data);
			setActiveImage(data?.images[0])
		}
		setLoading(false);
	}, [productId]);

	// Exibindo uma mensagem de carregamento
	if (loading) {
		return <div className={styles.product_view_container}>Carregando...</div>;
	}

	// Exibindo uma mensagem caso o produto não seja encontrado
	if (!product) {
		return <div className={styles.product_view_container}><h1>Produto não encontrado!</h1></div>;
	}

	// Se o produto foi encontrado, renderizamos a página
	return (
		<div className={styles.product_view_container}>
			<div className={styles.infos}>
				{/* Lado Esquerdo: Imagens */}
				<div className={styles.imagens}>
					<img src={activeImage} alt={product.title} id={styles.imagem_principal} />
					<div className={styles.thumbnail_container}>
						{product.images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Thumbnail ${index + 1} do produto ${product.title}`}
								className={`${styles.thumbnail} ${activeImage === image ? styles.active : ''}`}
								onClick={() => setActiveImage(image)}
							/>
						))}
					</div>
				</div>

				{/* Lado Direito: Informações e Compra */}
				<div className={styles.infos_direita}>
					<div className={styles.infos_produto}>
						<div>
							<h1 className={styles.titulo_produto}>{product.title}</h1>
							<h2 className={styles.preco_produto}>R$ {product.price.toFixed(2).replace('.', ',')}</h2>
							<p className={styles.description}>{product.description}</p>
							<p className={styles.gray_text}>
								Feito carinhosamente por{' '}
								<Link to={`/ongs/${product.ong_id}`} className={styles.ong_link}>
									{product.ong}
								</Link>
							</p>
						</div>
					</div>

					<div className={styles.purchaseControls}>
						<button
							className={styles.quantityMinus}
							onClick={() => quantity > 1 && setQuantity(quantity - 1)}
							disabled={quantity <= 1}
						>
							—
						</button>
						<a
							href={`https://wa.me/${product.phone}?text=${encodeURIComponent(`Olá, me interessei pelo produto ${product.title} e gostaria de comprar ${quantity} uni. Como podemos prosseguir?`)}`}
							target='_blank'
							rel="noopener noreferrer"
							className={styles.buyButton}
						>
							Comprar {quantity} uni.
						</a>
						<button
							className={styles.quantityPlus}
							onClick={() => setQuantity(quantity + 1)}
						>
							+
						</button>
					</div>
				</div>
			</div>

			{/* Seção de Especificações e Categorias */}
			<div className={styles.specifications_section}>
				<Box position="relative" display="inline-block" sx={{ marginTop: 2 }}>
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
						{product.categories.map((index) => {
							return (
								<ListItem key={index}>
									<Chip
										label={categoryMapping[index]}
									/>
								</ListItem>
							);
						})}
					</Paper>
				</Box>
			</div>
		</div>
	);
}

export default ProductView;