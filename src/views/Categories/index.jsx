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
  ProductsHighlights,
} from '../../components';

const Categories = () => {
      const products = [{
        "id": 12312,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    },
    {
        "id": 12313,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    },
    {
        "id": 12314,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    },
    {
        "id": 12315,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    },
    {
        "id": 12316,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    },
    {
        "id": 12317,
        "title": "Boneca de Pano",
        "price": 85.00,
        "images": [
            "https://image1.com",
            "https://image2.com",
            "https://image3.com"
        ],
        "ong": "Instituto Dia Melhor",
        "description": "dask oaskd oaksod akso dkaso dkaso kda"
    }
  ]
  const { id } = useParams();
  const mapping = [
    'Artesanatos e Produtos Manuais',
    'Alimentos e Bebidas',
    'Roupas e Acessórios Personalizados',
    'Arte e Cultura',
    'Produtos Sustentáveis',
    'Produtos de Higiene e Cosméticos Naturais',
    'Itens de Decoração',
    'Outros'
  ]
  
    return (
      <StyledMainContainer>
        <Pathing>Home / Categorias / <span>{mapping[id]}</span></Pathing>
        <StyledRow>
          <SidebarCategory id={id} />
          <StyledListProducts>
            <h2>{mapping[id]}</h2>
            {products.map((data) => (
              <ProductCategory data={data} id={id} />
            ))}
          </StyledListProducts>
        </StyledRow>
      </StyledMainContainer>
    )
}

export default Categories;
