import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginBanner from "../../assets/Login/login.png";
import {
  StyledMainContainer,
  StyledLeftSide,
  StyledRightSide,
  StyledImage,
  StyledForms,
  StyledRegister,
} from "./styles";

//TODOS: criar termos e politicas de privacidade
//       utilização dos cookies

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/ong/home");
    }, 2000);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledMainContainer>
      <StyledLeftSide>
        <StyledForms onSubmit={onSubmit}>
          <div>
            <h1>Bem-vindo de volta! 👋</h1>
            <p>
              ksdai sidjais sako sdk asod kas dksdoasksakd sidj aisda sijdasi
              asidj
            </p>
          </div>
          <TextField
            required
            margin="normal"
            label="Email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            type="email"
            placeholder="exemplo@gmail.com"
          />
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              label="Senha"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div id="forget-password">
            <Link to="/ong/esqueceu-senha">Esqueceu a senha?</Link>
          </div>
          <Button
            type="submit"
            size="small"
            color="primary"
            loading={loading}
            loadingPosition="end"
            variant="contained"
            fullWidth
            id="login-button"
          >
            Entrar
          </Button>
          <StyledRegister>
            Não possui conta ainda?{" "}
            <a href="https://conecta.recife.pe.gov.br/acesso"> Cadastre-se</a>
          </StyledRegister>
        </StyledForms>
      </StyledLeftSide>
      <StyledRightSide>
        <StyledImage src={LoginBanner} alt="banner do login" />
      </StyledRightSide>
    </StyledMainContainer>
  );
}

export default Login;
