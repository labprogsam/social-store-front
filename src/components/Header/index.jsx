import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/bora-impactar.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

function Header({ scrollTargets }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollTo = (ref) => {
    if (ref?.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollAndClose = (ref) => {
    scrollTo(ref);
    setDrawerOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/*menu hamburguer q vai ficar visível apenas em telas pequenas*/}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>

        {/*logo do bora impactar*/}
        <img src={logo} alt="Bora Impactar" className={styles.logo} />

        {/*campo de busca q vai ficar visível apenas no desktop*/}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            width: "100%",
            maxWidth: 600,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Pesquise por um produto..."
            inputProps={{ "aria-label": "pesquise por um produto..." }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        {/*navegaçao q fica disponivel somente no desktop*/}
        <nav className={styles.nav}>
          <a onClick={() => scrollTo(scrollTargets.secao1Ref)} className={styles.navLink}>Home</a>
          <a onClick={() => scrollTo(scrollTargets.secao2Ref)} className={styles.navLink}>Produtos</a>
          <a onClick={() => scrollTo(scrollTargets.secao3Ref)} className={styles.navLink}>Categorias</a>
          <a onClick={() => scrollTo(scrollTargets.secao4Ref)} className={styles.navLink}>Ongs</a>
        </nav>

        {/*botão de login q vai aparecer em desktop*/}
        <Link to="/app/login" className={styles.loginButton}>Login Ong</Link>

        {/*drawer do menu lateral para (mobile)*/}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 300 }}>
            {/*botão de fechar do menu lateral*/}
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/*campo/barra de busca no drawer*/}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                m: 2,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquise por um produto..."
                inputProps={{ "aria-label": "pesquise por um produto..." }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            {/*links no menu lateral*/}
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleScrollAndClose(scrollTargets.secao1Ref)}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleScrollAndClose(scrollTargets.secao2Ref)}>
                  <ListItemText primary="Produtos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleScrollAndClose(scrollTargets.secao3Ref)}>
                  <ListItemText primary="Categorias" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleScrollAndClose(scrollTargets.secao4Ref)}>
                  <ListItemText primary="Ongs" />
                </ListItemButton>
              </ListItem>
            </List>

            {/*botão de login do menu lateral(mobile)*/}
            <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
              <Link
                to="/app/login"
                onClick={() => setDrawerOpen(false)}
                className={styles.loginDrawerButton}
              >
                Login Ong
              </Link>
            </Box>
          </Box>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
