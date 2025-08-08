import { useRef } from 'react';
import {
  Banner,
  Categories,
  Header,
  OngCarousel,
  ProductsHighlights,
  Footer
} from '../../components'
import {
  StyledMainContent
} from './styles';

function Home() {
  return (
    <StyledMainContent>
      <Banner id="banner" />
      <Categories id="categories" />
      <ProductsHighlights id="product-hightlight" />
      <OngCarousel id="ong-carousel" />
    </StyledMainContent>
  )
}

export default Home;
