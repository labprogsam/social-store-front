// src/components/ProductsHighlights/ProductsData.js
import {
  argilaColoridaImg,
  bonePersonalizadoImg,
  bonecaPanoImg,
  camisaInfantilImg,
  chapeuPalhaImg,
  pacooquinhasImg,
  saquinhoImg,
  vasoPersonalizadoImg,
} from "../../assets";

// Adicionamos um ID para cada produto.
// O ideal é que esses IDs correspondam aos do nosso serviço mockado
const productsData = [
  // Vamos assumir que a boneca de pano tem id 1 e o vaso tem id 2
  { id: 1, nome: "Boneca de chita", preco: "R$ 85,00", imagem: bonecaPanoImg },
  { id: 2, nome: "Vaso de Ceramica", preco: "R$ 49,90", imagem: vasoPersonalizadoImg },
  { id: 3, nome: "Argila colorida", preco: "R$ 49,90", imagem: argilaColoridaImg },
  { id: 4, nome: "Boné Personalizado",preco: "R$ 49,90",imagem: bonePersonalizadoImg,},
  { id: 5, nome: "Paçoquinhas", preco: "R$ 49,90", imagem: pacooquinhasImg },
  { id: 6, nome: "Porta treco", preco: "R$ 49,90", imagem: saquinhoImg },
  { id: 7, nome: "Camisa infantil", preco: "R$ 49,90", imagem: camisaInfantilImg },
  { id: 8, nome: "Chapéu de capim do...", preco: "R$ 49,90", imagem: chapeuPalhaImg },
];

export default productsData;