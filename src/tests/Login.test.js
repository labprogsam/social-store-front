import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../views'; // ajuste conforme o caminho real
import { BrowserRouter as Router } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Importa o original e sobrescreve o que precisa
  useNavigate: () => mockedUsedNavigate, // Retorna sua função mockada
}));

describe('Login Component', () => {
  beforeEach(() => {
    mockedUsedNavigate.mockClear();
  });

  const setup = () => {
    return render(
      <Router>
        <Login />
      </Router>
    );
  };

  it('deve renderizar os elementos principais do formulário', () => {
    setup();

    expect(screen.getByText(/Bem-vindo de volta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByText(/Esqueceu a senha/i)).toBeInTheDocument();
  });

  it('deve permitir digitar email e senha', () => {
    setup();

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/);

    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(emailInput).toHaveValue('teste@exemplo.com');
    expect(passwordInput).toHaveValue('123456');
  });

  it('deve alternar visibilidade da senha ao clicar no ícone', () => {
    setup();

    const passwordInput = screen.getByLabelText(/Password/);
    const toggleButton = screen.getByLabelText(/display the password/);

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  // TODO: IMPLEMENTAR DPS QUE TIVER INTEGRADO
  // it('deve chamar onSubmit ao clicar em Entrar', () => {
  //   setup();

  //   const emailInput = screen.getByLabelText(/Email/i);
  //   const passwordInput = screen.getByLabelText(/Password/);
  //   const submitButton = screen.getByRole('button', { name: /Entrar/i });

  //   fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
  //   fireEvent.change(passwordInput, { target: { value: '123456' } });

  //   fireEvent.click(submitButton);

  //   expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  // });

  it('deve conter o link de recuperação de senha', () => {
    setup();

    const forgetLink = screen.getByText(/Esqueceu a senha/i);
    expect(forgetLink).toHaveAttribute('href', '/ong/esqueceu-senha');
  });

  it('deve conter o link para cadastro', () => {
    setup();

    const registerLink = screen.getByText(/Cadastre-se/i);
    expect(registerLink).toHaveAttribute(
      'href',
      'https://conecta.recife.pe.gov.br/acesso'
    );
  });
});
