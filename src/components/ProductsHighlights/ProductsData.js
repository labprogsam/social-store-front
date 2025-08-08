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
  { name: "Argila colorida", price: "R$ 49,90", image: argilaColoridaImg, id: 1 },
  { name: "Boné Personalizado",price: "R$ 49,90",image: bonePersonalizadoImg, id: 2,},
  { name: "Paçoquinhas", price: "R$ 49,90", image: pacooquinhasImg, id: 3 },
  { name: "Vaso de Ceramica", price: "R$ 49,90", image: vasoPersonalizadoImg, id: 4 },
  { name: "Porta treco", price: "R$ 49,90", image: saquinhoImg, id: 5 },
  { name: "Camisa infantil", price: "R$ 49,90", image: camisaInfantilImg, id: 6 },
  { name: "Boneca de chita", price: "R$ 49,90", image: bonecaPanoImg, id: 7 },
  { name: "Chapéu de capim do...", price: "R$ 49,90", image: chapeuPalhaImg, id: 8 },
];

export default productsData;