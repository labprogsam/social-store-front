import { useNavigate } from "react-router-dom";
import categoria1 from "../../assets/categoriesI/artesanato.png";
import categoria2 from "../../assets/categoriesI/alimentos.png";
import categoria3 from "../../assets/categoriesI/roupas.png";
import categoria4 from "../../assets/categoriesI/cultura.png";
import categoria5 from "../../assets/categoriesI/sustentaveis.png";
import categoria6 from "../../assets/categoriesI/higiene.png";
import categoria7 from "../../assets/categoriesI/decoracao.png";
import categoria8 from "../../assets/categoriesI/outros.png";
import './categories.css';

const categoriesData = [
  { id: 0, image: categoria1, name: "Artesanato e Produtos", items: 55 },
  { id: 1, image: categoria2, name: "Alimentos e Bebidas", items: 55 },
  { id: 2, image: categoria3, name: "Roupas e Acessórios", items: 55 },
  { id: 3, image: categoria4, name: "Arte e Cultura", items: 55 },
  { id: 4, image: categoria5, name: "Produtos Sustentáveis", items: 55 },
  { id: 5, image: categoria6, name: "Produtos de Higiene e Cosméticos Naturais", items: 55 },
  { id: 6, image: categoria7, name: "Itens de Decoração", items: 55 },
  { id: 7, image: categoria8, name: "Outros", items: 55 }
];

function Categories() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/categories/${id}`);
  }

  return (
    <div className="categories-container">
      <h2></h2>
      <div className="categories-grid">
        {categoriesData.map((category) => (
          <div className="category-item" key={category.id} onClick={() => handleClick(category.id)}>
            <div className="image-container">
              <img src={category.image} alt={category.name} />
              <div className="image-text">
                <h3>{category.name}</h3>
                <p>({category.items} items)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
