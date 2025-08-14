// src/components/ProductsHighlights/index.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState, forwardRef } from "react";
import ProductCard from "./Card";
import {
  SectionContainer,
  MainContentContainer,
  TitleBar,
  TitleText,
  ProductsFlexContainer,
} from "./styles.js";

const ProductsHighlights = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos em destaque
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/products/highlights"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos em destaque:", error);
      }
    }

    fetchProducts();
  }, []);

  // Função que será chamada quando um card for clicado
  const handleCardClick = (productId) => {
    // Se o produto não tiver um ID, não faz nada
    if (!productId) {
      console.warn("Este produto não possui um ID para navegação.");
      return;
    }
    // Navega para a página do produto com o ID correspondente
    navigate(`/app/produto/${productId}`);
  };

  if (products.length === 0) {
    return (
      <SectionContainer ref={ref}>
        <MainContentContainer>
          <div className="text-center p-10">
            Nenhum produto em destaque encontrado.
          </div>
        </MainContentContainer>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer ref={ref}>
      <MainContentContainer>
        <TitleBar>
          <TitleText>
            Produtos em Destaque
          </TitleText>
        </TitleBar>

        <ProductsFlexContainer>
          {products.map((produto) => (
            <ProductCard
              key={produto.id} // Use o ID como chave
              produto={produto}
              // Passe a função de clique para o componente ProductCard
              onClick={() => handleCardClick(produto.id)}
            />
          ))}
        </ProductsFlexContainer>
      </MainContentContainer>
    </SectionContainer>
  );
});

export default ProductsHighlights;
