import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMainContainer,
  StyledLine,
  StyledCategory
} from "./styles.js";

function SidebarCategory({id}) {
  console.log(id)
  const [isSelected, setIsSelect] = useState(id);

  return (
    <StyledMainContainer>
      <h2>Categorias</h2>
      <StyledLine />
      <Link to={`/app/categories/0`}>
        <StyledCategory onClick={() => setIsSelect('0')} isSelected={isSelected === '0'}>
          Artesanato e Produtos
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/1`}>
        <StyledCategory onClick={() => setIsSelect('1')} isSelected={isSelected === '1'}>
          Alimentos e Bebidas
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/2`}>
        <StyledCategory onClick={() => setIsSelect('2')} isSelected={isSelected === '2'}>
          Roupas e Acessórios
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/3`}>
        <StyledCategory onClick={() => setIsSelect('3')} isSelected={isSelected === '3'}>
          Arte e Cultura
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/4`}>
        <StyledCategory onClick={() => setIsSelect('4')} isSelected={isSelected === '4'}>
          Produtos Sustentáveis
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/5`}>
        <StyledCategory onClick={() => setIsSelect('5')} isSelected={isSelected === '5'}>
          Produtos de Higiene e Cosméticos Naturais
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/6`}>
        <StyledCategory onClick={() => setIsSelect('6')} isSelected={isSelected === '6'}>
          Itens de Decoração
        </StyledCategory>
      </Link>
      <Link to={`/app/categories/7`}>
        <StyledCategory onClick={() => setIsSelect('7')} isSelected={isSelected === '7'}>
          Outros
        </StyledCategory>
      </Link>
    </StyledMainContainer>
  );
}

export default SidebarCategory;
