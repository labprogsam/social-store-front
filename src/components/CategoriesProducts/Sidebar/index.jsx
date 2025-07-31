import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMainContainer,
  StyledLine,
  StyledCategory
} from "./styles.js";

function SidebarCategory({id}) {
  const [isSelected, setIsSelect] = useState(id);

  return (
    <StyledMainContainer>
      <h2 data-testid="sidebar-categories">Categorias</h2>
      <StyledLine />
      <Link to={`/categories/0`}>
        <StyledCategory onClick={() => setIsSelect('0')} isselected={`${isSelected === '0'}`}>
          Artesanato e Produtos
        </StyledCategory>
      </Link>
      <Link to={`/categories/1`}>
        <StyledCategory onClick={() => setIsSelect('1')} isselected={`${isSelected === '1'}`}>
          Alimentos e Bebidas
        </StyledCategory>
      </Link>
      <Link to={`/categories/2`}>
        <StyledCategory onClick={() => setIsSelect('2')} isselected={`${isSelected === '2'}`}>
          Roupas e Acessórios
        </StyledCategory>
      </Link>
      <Link to={`/categories/3`}>
        <StyledCategory onClick={() => setIsSelect('3')} isselected={`${isSelected === '3'}`}>
          Arte e Cultura
        </StyledCategory>
      </Link>
      <Link to={`/categories/4`}>
        <StyledCategory onClick={() => setIsSelect('4')} isselected={`${isSelected === '4'}`}>
          Produtos Sustentáveis
        </StyledCategory>
      </Link>
      <Link to={`/categories/5`}>
        <StyledCategory onClick={() => setIsSelect('5')} isselected={`${isSelected === '5'}`}>
          Produtos de Higiene e Cosméticos Naturais
        </StyledCategory>
      </Link>
      <Link to={`/categories/6`}>
        <StyledCategory onClick={() => setIsSelect('6')} isselected={`${isSelected === '6'}`}>
          Itens de Decoração
        </StyledCategory>
      </Link>
      <Link to={`/categories/7`}>
        <StyledCategory onClick={() => setIsSelect('7')} isselected={`${isSelected === '7'}`}>
          Outros
        </StyledCategory>
      </Link>
    </StyledMainContainer>
  );
}

export default SidebarCategory;
