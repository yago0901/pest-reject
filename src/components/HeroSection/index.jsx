"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";

const HeroSection = ({ scrollToForm }) => (
  <header className={styles.hero}>
    <div className={styles.heroTitle}>
      <h1>Collega e Dimentica il Problema</h1>
      <p>Libera la tua casa da insetti e roditori, senza sostanze chimiche e senza rumore.</p>
    </div>
    <div className={styles.containerFlex}>
      <div className={styles.right}>
        <div className={styles.rightText}>
          <div>
            <h2>Pest Reject</h2>
            <h2>soluzione ecologica e sicura</h2>
          </div>
          <div>
            <p>
              Con tecnologia ultrasonica all'avanguardia, elimina topi, scarafaggi e insetti senza sostanze chimiche,
              sporcizia o rischi per la tua famiglia - basta collegarlo e dimenticare il problema!
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <p>
            <b>Pest Reject</b> 50% di sconto
          </p>
          <div className={styles.imageHero}>
            <Image alt="zanzara" src="/mosquito.webp" width={500} height={300} loading="lazy" />
          </div>
        </div>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}>
            <b>Ordina ora</b>
          </button>
        </div>
      </div>
      <div className={styles.left}>
        <Image alt="Pest Reject" src="/product-on.webp" width={500} height={300} loading="lazy" />
      </div>
    </div>
  </header>
);

export default HeroSection;
