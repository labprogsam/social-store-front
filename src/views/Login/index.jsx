import { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  MainContainer,
  ImageSide,
  FormSide,
  FormContainer,
} from "./styles";
import { postLogin } from '../../services/login';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { replace } = useHistory();
  const { pathname } = useLocation();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await postLogin(email, password);
    Cookies.set('access_token', result?.access_token, { path: '' });
    Cookies.set('profile', result?.profile, { path: '' });
    
    setTimeout(() => {
      if (!pathname.startsWith('/app')) {
        replace('/app');
      }
    }, 300);
  };

  const handleChange = (e, setField) => {
    console.log(e.target.value)
    setField(e.target.value)
  }

  return (
    <MainContainer>
      <ImageSide>
        <div className="image-content">
          {/* <img src={LogoIcon} alt="Logo traços" /> */}
        </div>
      </ImageSide>
      <FormSide>
        <FormContainer onSubmit={(e) => onSubmit(e)}>
          <h1>Boas-vindas</h1>
          <TextField
            type="email"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            fullWidth
            size="small"
            label="Email*"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => handleChange(e, setPassword)}
            label="Senha*"
            size="small"
            variant="outlined"
            margin="normal"
          />
          <div id="actions">
            <Button type="submit" id="entrar" fullWidth variant="contained">
              Entrar
            </Button>
            <Link id="register-button" to="/auth/register">
              <Button type="submit" id="cadastre" fullWidth variant="contained">
                Crie uma conta
              </Button>
            </Link>
            <Link to="/auth/forgot-password">Esqueci minha senha</Link>
          </div>
        </FormContainer>
      </FormSide>
    </MainContainer>
  );
};

export default Register;
