// src/services/products.js

// Importando imagens para usar nos nossos produtos mockados
import {
  bonecaPanoImg,
  vasoPersonalizadoImg,
  camisaInfantilImg,
  pacooquinhasImg,
} from "../assets";

// Simulando nosso banco de dados de produtos
const mockProducts = [
  {
    id: 1,
    title: "BONECA DE PANO",
    price: 85.0,
    images: [
      bonecaPanoImg, // Imagem principal
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437",
    ],
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...",
    ong: "Instituto Dia Melhor",
    ong_id: 1,
    phone: 5581999999999, // Número para o link do WhatsApp
    specifications: {
      dimensions: ["60 centímetros de altura", "Cabeça com 30 cm de diametro"],
      materials: ["Algodão", "Preenchimento em fibra siliconada"],
    },
    categories: ["Roupas e acessórios", "Produtos Sustentáveis"],
  },
  {
    id: 2,
    title: "VASO DE CERÂMICA",
    price: 49.9,
    images: [
      vasoPersonalizadoImg,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u22h9G-l-hH2Lq1k-4Xz9rD8r8c8c7f7w&s",
      "https://i.pinimg.com/736x/2e/c5/4c/2ec54c9c224a081295b9a8966867f0e6.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT676eB_2Zf-Y5c_b0a1d4D8f5e9n7a-G2c9g&s",
    ],
    description:
      "Um belo vaso de cerâmica para decorar sua casa. Feito com técnicas artesanais, cada peça é única.",
    ong: "ONG Mãos que Criam",
    ong_id: 2,
    phone: 5581988888888,
    specifications: {
      dimensions: ["20 cm de altura", "15 cm de diâmetro"],
      materials: ["Cerâmica", "Tinta atóxica"],
    },
    categories: ["Itens de Decoração", "Artesanato e Produtos"],
  },
  // Adicione mais produtos aqui se desejar
];

/**
 * Função que busca todos os produtos. No futuro, isso faria uma chamada de API.
 * @returns {Array} - Uma lista de todos os produtos.
 */
export const getAllProducts = () => {
  return mockProducts;
};

/**
 * Função que busca um produto específico pelo seu ID.
 * @param {string | number} id - O ID do produto a ser encontrado.
 * @returns {object | undefined} - O objeto do produto se encontrado, ou undefined.
 */
export const getProductById = (id) => {
  // O ID vindo da URL é uma string, então convertemos para número para a comparação.
  return mockProducts.find((product) => product.id === parseInt(id));
};