import { useRef } from 'react';
import {
  Banner,
  Categories,
  Header,
  OngCarousel,
  ProductsHighlights,
  Footer
} from '../../components'

function Home() {
  const secao1Ref = useRef(null);
  const secao2Ref = useRef(null);
  const secao3Ref = useRef(null);
  const secao4Ref = useRef(null);

  return (
    <div>
      <Header scrollTargets={{ secao1Ref, secao2Ref, secao3Ref, secao4Ref }} />
      <Banner id="banner" ref={secao1Ref} />
      <Categories id="categories" ref={secao2Ref} />
      <ProductsHighlights id="product-hightlight" ref={secao3Ref} />
      <OngCarousel id="ong-carousel" ref={secao4Ref} />
      <Footer />
    </div>
  )
}

export default Home;
