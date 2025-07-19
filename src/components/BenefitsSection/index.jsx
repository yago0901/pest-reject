"use client";
import Image from 'next/image';
import styles from "../../app/page.module.css";
const BenefitsItem = ({ imgSrc, title, text, scrollToForm }) => (
  <div className={styles.benefitsFirstItem}>
    <div className={styles.benefitsFirstImage}>
      <Image 
        alt={`Vantaggio ${title}`} 
        src={`/${imgSrc}`}
        width={500}
        height={300}
        loading="lazy"
      />
    </div>
    <div className={styles.benefitsFirstDetails}>
      <div className={styles.benefitsFirstTexts}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

const BenefitsSection = ({ scrollToForm }) => (
  <section className={styles.benefitsFirst}>
    <div className={styles.container}>
      <div className={styles.benefitsGrid}>
        <BenefitsItem
          imgSrc="seguranca.webp"
          title="Sicurezza Totale"
          text="Completamente sicuro per persone e animali domestici. Zero prodotti chimici!"
          scrollToForm={scrollToForm}
        />
        <BenefitsItem
          imgSrc="relogio.webp"
          title="Azione Rapida"
          text="Grazie agli impulsi ultrasonici periodici, risolve il problema senza creare assuefazione"
          scrollToForm={scrollToForm}
        />
      </div>
      <div className={styles.benefitsGrid}>
        <BenefitsItem
          imgSrc="radar.webp"
          title="Ampia Copertura"
          text="Ideale per magazzini, negozi, hotel, ospedali e abitazioni. Copertura da 80 a 120 metri quadri"
          scrollToForm={scrollToForm}
        />
        <BenefitsItem
          imgSrc="energia-eletrica.webp"
          title="Alimentazione Elettrica"
          text="Pronto all'uso 24 ore su 24 senza bisogno di cambiare batterie"
          scrollToForm={scrollToForm}
        />
      </div>      
      <div className={styles.benefitsFirstButton}>
        <button onClick={scrollToForm} className={styles.heroBtn}>
          <b>Ordina subito</b>
        </button>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
