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
  const secao1Ref = useRef(null);
  const secao2Ref = useRef(null);
  const secao3Ref = useRef(null);
  const secao4Ref = useRef(null);

  return (
    <StyledMainContent>
      <Banner id="banner" ref={secao1Ref} />
      <Categories id="categories" ref={secao2Ref} />
      <ProductsHighlights id="product-hightlight" ref={secao3Ref} />
      <OngCarousel id="ong-carousel" ref={secao4Ref} />
    </StyledMainContent>
  )
}

export default Home;
