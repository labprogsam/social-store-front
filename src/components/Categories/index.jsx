import './categories.css';
import categoria1 from "../../assets/categoriesI/artesanato.png";
import categoria2 from "../../assets/categoriesI/alimentos.png";
import categoria3 from "../../assets/categoriesI/roupas.png";
import categoria4 from "../../assets/categoriesI/cultura.png";
import categoria5 from "../../assets/categoriesI/sustentaveis.png";
import categoria6 from "../../assets/categoriesI/nada.png";
import categoria7 from "../../assets/categoriesI/nada.png";
import categoria8 from "../../assets/categoriesI/outros.png";

const categoriesData = [
  { id: 1, image: categoria1, name: "Artesanato e Produtos Manuais", items: 55 },
  { id: 2, image: categoria2, name: "Alimentos e Bebidas Artesanais", items: 55 },
  { id: 3, image: categoria3, name: "Roupas e Acessórios Personalizados", items: 55 },
  { id: 4, image: categoria4, name: "Arte e Cultura", items: 55 },
  { id: 5, image: categoria5, name: "Produtos Sustentáveis", items: 55 },
  { id: 6, image: categoria6, name: "Produtos Pet", items: 55 },
  { id: 7, image: categoria7, name: "...", items: 55 },
  { id: 8, image: categoria8, name: "Outros", items: 55 }
];

function Categories() {
  return (
    <div className="categories-container">
      <h2></h2>
      <div className="categories-grid">
        {categoriesData.map((category) => (
          <div className="category-item" key={category.id}>
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
