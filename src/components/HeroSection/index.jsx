"use client";
import styles from "../../app/page.module.css";

const HeroSection = ({ scrollToForm }) => (
  <header className={styles.hero}>
    <div className={styles.menu}>
      <p className={styles.logoMenu}>PEST REJECT</p>
      <div className={styles.menuList}>
        <p>Home</p>
        <p>Informazioni</p>
        <p>Funzionamento</p>
        <p>Recensioni</p>
        <p>Acquista</p>
        <p>FAQ</p>
      </div>
    </div>
    <div className={styles.heroTitle}>
      <h1>
        Collega e Dimentica il Problema
      </h1>
      <p>Libera la tua casa da insetti e roditori, senza sostanze chimiche e senza rumore.</p>
    </div>
    <div className={styles.containerFlex}>
      <div className={styles.right}>
        <div className={styles.rightText}>
          <div>
            <h2>Pest Reject</h2>
            <h2>soluzione definitiva, ecologica e sicura</h2>
          </div>
          <div>
            <p>Con tecnologia ultrasonica all'avanguardia, elimina topi, scarafaggi e insetti senza sostanze chimiche,</p>
            <p>sporcizia o rischi per la tua famiglia - basta collegarlo e dimenticare il problema!</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <p>
            <b>Pest Reject</b> 50% di sconto
          </p>
          <div className={styles.imageHero}>
            <img alt="Weight Berry" src="mosquito.png" />
          </div>
        </div>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}>
            <b>Ordina ora</b>
          </button>
        </div>
      </div>
      <div className={styles.left}>
        <img alt="Weight Berry" src="product-on.png" />
      </div>
    </div>
  </header>
);

export default HeroSection;
