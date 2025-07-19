"use client";
import styles from "../../app/page.module.css";
const Carrocel = () => (
  <section className={styles.carrocel}>
    <div className={styles.container}>
      <div className={styles.carrocelTitle}>
        <h1>Stanco degli Insetti che Invadono Casa Tua?</h1>
        <p>
          Che sia una villa di campagna o un appartamento in città, se hai un'infestazione di scarafaggi, zanzare o
          topi, è ora di agire subito. Non solo perché sono fastidiosi, ma perché possono trasmettere malattie
          pericolose. Combattili con un metodo efficace per eliminarli definitivamente in modo rapido e sicuro.
        </p>
      </div>
      <div className={styles.carrocelDetails}>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="Zanzare" src="mosquito-silhueta.png" />
            <h2>Zanzare</h2>
          </div>
          <div>
            Le zanzare non solo disturbano il sonno, ma possono trasmettere malattie come la malaria o il virus Zika.
            Pest Reject le tiene lontane senza prodotti chimici.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="Scarafaggi" src="barata-silhueta.png" />
            <h2>Scarafaggi</h2>
          </div>
          <div>
            Gli scarafaggi contaminano il cibo e possono causare allergie. Il nostro sistema a ultrasuoni li allontana
            efficacemente da cucine e dispense.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="Topi" src="rato-silhueta.png" />
            <h2>Topi</h2>
          </div>
          <div>
            Roditori come topi e ratti danneggiano cavi elettrici e mobili, oltre a essere vettori di malattie. Pest
            Reject li fa fuggire senza trappole o veleni.
          </div>
        </div>
        <div className={styles.carrocelItem}>
          <div className={styles.carrocelItemContainer}>
            <img alt="władza" src="formiga-silhueta.png" />
            <h2>Formiche</h2>
          </div>
          <div>
            Le colonie di formiche invadono case e giardini. La nostra tecnologia le disorienta, interrompendo i loro
            percorsi e costringendole ad abbandonare l'area.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Carrocel;
