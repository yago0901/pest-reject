"use client";
import styles from "../../app/page.module.css";
const Faq = ({ scrollToForm }) => (
  <section className={styles.how}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>DOMANDE?</h1>
        <p>Domande Frequenti</p>
      </div>
      <div className={styles.faqFormDetails}>
        <div className={styles.containerButton}>
          <button onClick={scrollToForm} className={styles.heroBtn}>
            <b>Ordina ora</b>
          </button>
        </div>
        <div className={styles.faqFormItem3}>
          <details>
            <summary>Pest Reject funziona davvero?</summary>
            <div>
              Assolutamente sì! Il dispositivo emette impulsi ultrasonici che disturbano il sistema nervoso dei
              parassiti, allontanandoli senza sostanze chimiche. Risultati visibili entro 1-2 settimane.
            </div>
          </details>
          <details>
            <summary>È sicuro per bambini e animali domestici?</summary>
            <div>
              Completamente sicuro! Gli ultrasuoni non sono percepibili da esseri umani o animali domestici, solo da
              insetti e roditori.
            </div>
          </details>
          <details>
            <summary>Qual è la portata del dispositivo?</summary>
            <div>Copre fino a 120m² (un grande ambiente). Per aree più grandi, consigliamo 2 unità.</div>
          </details>
          <details>
            <summary>Richiede manutenzione?</summary>
            <div>
              Nessuna! Basta collegarlo alla presa corrente e dimenticarsene - funziona 24/7 senza bisogno di cambiare
              batterie.
            </div>
          </details>
          <details>
            <summary>Posso restituirlo se non sono soddisfatto?</summary>
            <div>Certamente! Rispettiamo pienamente le normative italiane sul diritto di recesso.</div>
          </details>
          <details>
            <summary>Quanto dura l'effetto?</summary>
            <div>
              I parassiti iniziano a fuggire entro 3-7 giorni. Per infestazioni gravi, usare continuativamente per 4
              settimane.
            </div>
          </details>
        </div>
      </div>
      <div className={styles.faqRodape}>
        <p>Questo sito e questo prodotto sono conformi a tutte le leggi locali in Italia. Sito affiliato Adcombo</p>
        <p>* Cliccando sul pulsante “Ordina” confermate di aver letto l'Informativa sulla privacy e di acconsentire al trattamento dei vostri dati personali.</p>
      </div>
    </div>
  </section>
);

export default Faq;
