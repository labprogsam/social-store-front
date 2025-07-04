import styles from "./styles.module.css";
import logo from "../../assets/bora-impactar.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Header({ scrollTargets }) {

  const scrollTo = (ref) => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Bora Impactar" className={styles.logo} />
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

        <nav className={styles.nav}>
          <a onClick={() => scrollTo(scrollTargets.secao1Ref)} className={styles.navLink}>
            Home
          </a>
          <a onClick={() => scrollTo(scrollTargets.secao2Ref)} className={styles.navLink}>
            Produtos
          </a>
          <a onClick={() => scrollTo(scrollTargets.secao3Ref)} className={styles.navLink}>
            Categorias
          </a>
          <a onClick={() => scrollTo(scrollTargets.secao4Ref)} className={styles.navLink}>
            Ongs
          </a>
        </nav>
        <button type="button" className={styles.loginButton}>
          Login Ong
        </button>
      </div>
    </header>
  );
}

export default Header;
