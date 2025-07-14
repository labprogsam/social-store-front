import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/bora-impactar.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img onClick={handleClick} src={logo} alt="Bora Impactar" className={styles.logo} />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquise por uma produto..."
              inputProps={{ "aria-label": "pesquise por uma produto..." }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Link to="/app/login" className={styles.loginButton}>
          Login Ong
        </Link>
      </div>
    </header>
  );
}

export default Header;
