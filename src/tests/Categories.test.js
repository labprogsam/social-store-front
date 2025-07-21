import { render, screen, fireEvent } from '@testing-library/react';
import { CategoriesView } from '../views';
import { ProductCategory } from '../components';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocks necessários
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '0' }) // simula categoria 0
}));

// Caso use styled-components ou similar que possa interferir, mantenha wrap
const renderWithRouter = (ui) => {
  return render(<Router>{ui}</Router>);
};

const dataProduct = {
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
  "description": "dask oaskd oaksod akso dkaso dkaso kda"
}

describe('Categories Component', () => {
  it('deve renderizar o título da categoria', () => {
    renderWithRouter(<CategoriesView />);
    const title = screen.getByTestId('main-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Artesanato e Produtos');
  });

  it('deve renderizar o breadcrumb correto', () => {
    renderWithRouter(<CategoriesView />);
    const span = screen.getByTestId('span-category');
    expect(span).toHaveTextContent('Artesanato e Produtos');
  });

  it('deve renderizar o componente SidebarCategory', () => {
    renderWithRouter(<CategoriesView />);

    const sidebar = screen.getByTestId('sidebar-categories');

    expect(sidebar).toBeInTheDocument();
  });
});

describe('Product Component', () => {
  it('deve renderizar 5 images do produto', () => {
    renderWithRouter(<ProductCategory data={dataProduct} />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(5);
  });

  it('deve possuir um link de redirecionamento para página da ong', () => {
    renderWithRouter(<ProductCategory data={dataProduct} />);

    const link = screen.getByTestId('link-ong');
    expect(link).toHaveAttribute(
      'href',
      '/app/ongs/1'
    );
  });

  it('deve possuir botões que alteram a quantidade de produtos', () => {
    renderWithRouter(<ProductCategory data={dataProduct} />);

    const buyButton = screen.getByTestId('buy-button');
    const plus = screen.getByText("+");
    const minus = screen.getByText("—");
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(minus);

    expect(buyButton).toHaveTextContent("Comprar 2 uni.")
  });
});
