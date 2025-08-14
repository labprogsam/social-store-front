import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/bora-impactar.svg";
import { useUserData, useLogout } from '../../services/auth';

function Header() {
  const navigate = useNavigate();
  const { data: authData, isPending: isUserDataLoading } = useUserData();
  const { mutate: logout } = useLogout();

  const location = useLocation();

  const pathCompleto = location.pathname;

  const handleClick = () => {
    if (authData && pathCompleto.includes("/ong/")) {
      logout()
      navigate('/')
    } else {
      navigate('/login')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/home">
            <img src={logo} alt="Bora Impactar" className={styles.logo} />
          </Link>
        </div>
        <div onClick={handleClick} className={styles.loginButton}>
          {(authData && pathCompleto.includes("/ong/")) ? "Encerrar" : "Entrar"}
        </div>
      </div>
    </header>
  );
}

export default Header;
