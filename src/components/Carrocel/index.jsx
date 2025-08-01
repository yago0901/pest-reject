"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
const Carrocel = () => (
  <section className={styles.carrocel}>
    <div className={styles.container}>
      <div className={styles.carrocelTitle}>
        <h1>Stanco degli Insetti che Invadono Casa Tua?</h1>
        <div className={styles.carrocelSubTitle}>
          <p>
            Che sia una villa di campagna o un appartamento in città, se hai un'infestazione di scarafaggi, zanzare o
            topi, è ora di agire subito. Non solo perché sono fastidiosi, ma perché possono trasmettere malattie
            pericolose. Combattili con un metodo efficace per eliminarli definitivamente in modo rapido e sicuro.
          </p>
        </div>
      </div>
      <div className={styles.carrocelDetails}>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <Image alt={`Zanzare`} src="/mosquito-silhueta.webp" width={500} height={300} loading="lazy" />
            <h2>Zanzare</h2>
          </div>
          <div className={styles.carrocelDescriptionItem}>
            Le zanzare non solo disturbano il sonno, ma possono trasmettere malattie come la malaria o il virus Zika.
            Pest Reject le tiene lontane senza prodotti chimici.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <Image alt="Scarafaggi" src="/barata-silhueta.webp" width={500} height={300} loading="lazy" />
            <h2>Scarafaggi</h2>
          </div>
          <div className={styles.carrocelDescriptionItem}>
            Gli scarafaggi contaminano il cibo e possono causare allergie. Il nostro sistema a ultrasuoni li allontana
            efficacemente da cucine e dispense.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <Image alt="Topi" src="/rato-silhueta.webp" width={500} height={300} loading="lazy" />
            <h2>Topi</h2>
          </div>
          <div className={styles.carrocelDescriptionItem}>
            Roditori come topi e ratti danneggiano cavi elettrici e mobili, oltre a essere vettori di malattie. Pest
            Reject li fa fuggire senza trappole o veleni.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <Image alt="formica" src="/formiga-silhueta.webp" width={500} height={300} loading="lazy" />
            <h2>Formiche</h2>
          </div>
          <div className={styles.carrocelDescriptionItem}>
            Le colonie di formiche invadono case e giardini. La nostra tecnologia le disorienta, interrompendo i loro
            percorsi e costringendole.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Carrocel;
