import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/bora-impactar.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.left}>
            <img src={logo} alt="Bora Impactar" className={styles.logo} />
        </div>

        <div className={styles.center}>
            <input
                type="text"
                placeholder="Pesquise por um produto..."
                className={styles.searchInput}
        />
        <button type="button" className={styles.searchButton}>🔍</button>

        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Produtos</a>
          <a href="#" className={styles.navLink}>Ongs</a>
        </nav>
    </div>

    <div className={styles.right}>
        <button type="button" className={styles.loginButton}>Login Ong</button> 
    </div>
    </div>
    </header>
  );
}

export default Header;
