import {
  Pathing,
  StyledMainContainer,
  StyledRow,
  StyledListProducts
} from './styles.js';
import { useParams } from 'react-router-dom';

import {
  SidebarCategory,
  ProductCategory,
} from '../../components';

const Categories = () => {
  const products = [{
    "id": 12312,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  },
  {
    "id": 12313,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  },
  {
    "id": 12314,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  },
  {
    "id": 12315,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  },
  {
    "id": 12316,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  },
  {
    "id": 12317,
    "title": "Boneca de Pano",
    "price": 85.00,
    "images": [
      "https://www.artesdaceci.com.br/Fotos/Media/Artes_da_Ceci_70-1445799758.jpg",
      "https://images.tcdn.com.br/img/img_prod/1162865/boneca_de_pano_jardim_encantado_rosa_p_15cm_1129_1_c06b727a251128e4bc5a7b21789f5b63.jpg",
      "https://images.tcdn.com.br/img/img_prod/655423/boneca_de_pano_roxa_violeta_19574_1_2b745fa8c0ce4d471688b01126f58aa4.jpg",
      "https://mooui.com.br/cdn/shop/files/boneco-encantada-mooui-min.jpg?v=1734458437"
    ],
    "ong": "Instituto Dia Melhor",
    "ong_id": 1,
    "phone": 5581996089701,
    "description": "dask oaskd oaksod akso dkaso dkaso kda"
  }
  ]
  const { id } = useParams();
  const mapping = [
    'Artesanato e Produtos',
    'Alimentos e Bebidas',
    'Roupas e Acessórios',
    'Arte e Cultura',
    'Produtos Sustentáveis',
    'Produtos de Higiene e Cosméticos Naturais',
    'Itens de Decoração',
    'Outros'
  ]

  return (
    <StyledMainContainer>
      <Pathing>Home / Categorias / <span data-testid="span-category">{mapping[id]}</span></Pathing>
      <StyledRow>
        <SidebarCategory id={id} />
        <StyledListProducts>
          <h2 data-testid="main-title" id="main-title">{mapping[id]}</h2>
          {products.map((data, index) => (
            <ProductCategory key={index} data={data} id={id} />
          ))}
        </StyledListProducts>
      </StyledRow>
    </StyledMainContainer>
  )
}

export default Categories;
