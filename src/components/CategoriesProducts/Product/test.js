import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCategory from './index.jsx';

jest.mock('../../assets/ProductCategory/botão-mais.svg', () => 'mock-mais-icon');
jest.mock('../../assets/ProductCategory/botão-menos.svg', () => 'mock-menos-icon');
jest.mock('../../assets/ProductCategory/botão-menos-transparente.svg', () => 'mock-menos-transparente-icon');
jest.mock('../../assets/ProductCategory/botão-seta.svg', () => 'mock-seta-icon');
jest.mock('../../assets/ProductCategory/carrinho-icon.svg', () => 'mock-carrinho-icon');

describe('ProductCategory Component', () => {
  const mockData = {
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
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ..."
  };

  describe('Category View (isCategoryView=true)', () => {
    beforeEach(() => {
      render(<ProductCategory isCategoryView={true} />);
    });

    test('renderiza informações básicas', () => {
      expect(screen.getByText(mockData.title.toUpperCase())).toBeInTheDocument();
      expect(screen.getByText(`R$ ${mockData.price.toFixed(2).replace('.', ',')}`)).toBeInTheDocument();
      expect(screen.getByText(mockData.description)).toBeInTheDocument();
      expect(screen.getByText(mockData.ong)).toBeInTheDocument();
    });

    test('exibe controles específicos da visualização de produto', () => {
      expect(screen.getByText('Quantidade: 1')).toBeInTheDocument();
      expect(screen.getByText('Comprar')).toBeInTheDocument();
    });

    test('troca de imagem principal ao clicar nas miniaturas', () => {
      const thumbnails = screen.getAllByRole('img').slice(1, 5);
      const mainImage = screen.getByTestId('main-image-category');
      
      fireEvent.click(thumbnails[1]);
      expect(mainImage).toHaveAttribute('src', mockData.images[1]);
    });
  });

  describe('Product View (isCategoryView=false)', () => {
    beforeEach(() => {
      render(<ProductCategory isCategoryView={false} />);
    });

    test('renderiza informações básicas', () => {
      expect(screen.getByText(mockData.title.toUpperCase())).toBeInTheDocument();
      expect(screen.getByText(`R$ ${mockData.price.toFixed(2).replace('.', ',')}`)).toBeInTheDocument();
      expect(screen.getByText(mockData.description)).toBeInTheDocument();
      expect(screen.getByText(mockData.ong)).toBeInTheDocument();
    });

    test('controles de quantidade funcionam corretamente', () => {
      const incrementButton = screen.getAllByRole('button')[2];
      const decrementButton = screen.getAllByRole('button')[0];
      
      expect(screen.getByText('Comprar 1 uni.')).toBeInTheDocument();
      
      fireEvent.click(incrementButton);
      expect(screen.getByText('Comprar 2 uni.')).toBeInTheDocument();
      
      fireEvent.click(decrementButton);
      expect(screen.getByText('Comprar 1 uni.')).toBeInTheDocument();
    });

    test('botão de decremento fica desabilitado na quantidade mínima', () => {
      const decrementButton = screen.getAllByRole('button')[0];
      expect(decrementButton).toBeDisabled();
    });

    test('troca de imagem principal ao clicar nas miniaturas', () => {
      const thumbnails = screen.getAllByRole('img').slice(1, 5);
      const mainImage = screen.getByTestId('main-image-product');

      fireEvent.click(thumbnails[2]);
      expect(mainImage).toHaveAttribute('src', mockData.images[2]);
    });
  });
});