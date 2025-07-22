// src/services/products.js

// Dados mockados que estavam na sua view de Categorias
const products = [
  {
    "id": "boneca-de-pano-1", // Adicionamos um ID único em formato de string (slug)
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://i.imgur.com/Q2a2s4s.jpeg", // Usando um link de imagem real para o exemplo
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ...",
    "specifications": {
        "dimensions": [
            "60 centímetros de altura",
            "Cabeça com 30 cm de diâmetro"
        ],
        "materials": [
            "Algodão",
            "Preenchimento em fibra siliconada"
        ]
    },
    "categories": [
        "Roupas e acessórios", "Alimentos e bebidas", "Produtos Sustentáveis"
    ]
  },
  // Adicione outros produtos aqui com IDs únicos
];

/**
 * Função que retorna todos os produtos.
 * No futuro, pode fazer uma chamada de API aqui.
 */
export const getProducts = () => {
  return products;
};

/**
 * Função que busca um produto pelo seu ID.
 * @param {string} id - O ID do produto a ser encontrado.
 * @returns {object|undefined} - O objeto do produto se encontrado, ou undefined.
 */
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};