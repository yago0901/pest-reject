import Image from "next/image";
import styles from "../../app/page.module.css";
const How = () => (
  <section className={styles.how}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Come ricevere il tuo <b>Pest Reject</b> in <b>3 semplici passi</b>
        </h1>
      </div>
      <div className={styles.howDetails}>
        <div className={styles.howItem}>
          <Image alt="Ordine" src="/atendimento.svg" width={150} height={300} loading="lazy" />
          <div>
            <h1>1. Fai il tuo ordine</h1>
            <p>
              Compila il modulo con i tuoi dati e il nostro operatore ti contatterà entro <b>2 minuti</b> per la
              conferma.
            </p>
          </div>
        </div>
        <div className={styles.howItem}>
          <Image alt="Spedizione" src="/envio.svg" width={150} height={300} loading="lazy" />
          <div>
            <h1>2. Spedizione express</h1>
            <p>
              Il tuo Pest Reject verrà spedito entro <b>24 ore</b> dalla conferma. Tempi di consegna:{" "}
              <b>2-5 giorni lavorativi</b> in tutta Italia.
            </p>
          </div>
        </div>
        <div className={styles.howItem}>
          <Image alt="Consegna" src="/recebimento.svg" width={150} height={300} loading="lazy" />
          <div>
            <h1>3. Ricevi il prodotto</h1>
            <p>Ricevi comodamente a casa il tuo dispositivo funzionante e pronto all'uso.</p>
          </div>
        </div>
        <div className={styles.howItem}>
          <Image alt="Pagamento" src="/pagamento.svg" width={150} height={300} loading="lazy" />
          <div>
            <h1>4. Pagamento sicuro</h1>
            <p>
              Paga come preferisci: <b>carta</b> (12 rate), <b>Satispay</b> (5% sconto) o <b>bonifico</b>. Transazioni
              protette.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default How;
