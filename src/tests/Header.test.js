import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header/index';

// Como o Header usa 'useNavigate' para o clique no logo,
// precisamos mockar o hook para verificar se ele é chamado corretamente.
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // Mantemos todas as funcionalidades originais do react-router-dom
  ...jest.requireActual('react-router-dom'),
  // E sobrescrevemos apenas o useNavigate
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header Component', () => {

  beforeEach(() => {
    // Limpa o histórico do mock antes de cada teste para garantir a independência
    mockedUsedNavigate.mockClear();
    
    // Renderiza o componente dentro de um Router, já que ele usa <Link>
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('deve renderizar o logo e o campo de busca', () => {
    // Verifica se os elementos principais estão na tela
    const logo = screen.getByAltText('Bora Impactar');
    const searchInput = screen.getByPlaceholderText('Pesquise por uma produto...');

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it('deve navegar para a home ao clicar no logo', async () => {
    // Simula a interação do usuário
    const logo = screen.getByAltText('Bora Impactar');
    await userEvent.click(logo);
    
    // Verifica se a função de navegação foi chamada com o destino correto
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
  });

  it('deve permitir a digitação no campo de busca', async () => {
    const searchInput = screen.getByPlaceholderText('Pesquise por uma produto...');
    
    // Simula o usuário digitando no campo
    await userEvent.type(searchInput, 'camisa de algodão');
    
    // Verifica se o valor do campo foi atualizado
    expect(searchInput).toHaveValue('camisa de algodão');
  });

  it('deve renderizar o botão de "Login Ong" com o link correto', () => {
    // Encontra o link pelo seu texto e função (role)
    const loginButton = screen.getByRole('link', { name: /Login Ong/i });
    
    expect(loginButton).toBeInTheDocument();
    // Verifica se o atributo 'href' aponta para a rota de login
    expect(loginButton).toHaveAttribute('href', '/login');
  });
});