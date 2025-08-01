import Image from "next/image";
import styles from "../../app/page.module.css";
const ReviewItem = ({ imgSrc, children, scrollToForm }) => (
  <div className={styles.reviewsItem}>
    <div className={styles.reviewsItemImage}>
    <Image
      alt="Pest Reject"
      src={`/${imgSrc}`}
      width={500}
      height={300}
      loading="lazy"
    />
    </div>
    <p>{children}</p>
    <div className={styles.benefitsFirstButton}>
      <button onClick={scrollToForm} className={styles.heroBtn}>
        <b>Ordina ora</b>
      </button>
    </div>
  </div>
);

const ReviewsSection = ({ scrollToForm }) => (
  <section className={styles.reviews}>
    <div className={styles.container}>
      <div className={styles.carrocelTitle}>
        <h1>Cosa Dicono i Nostri Clienti</h1>
      </div>
      <div className={styles.reviewsDetails}>
        <ReviewItem imgSrc="client1.webp" scrollToForm={scrollToForm}>
          "Avevo il terrore dei topi nella mia dispensa, ma non volevo usare veleni per la mia gatta Luna. Ho provato
          Pest Reject e in 3 giorni non ho più sentito rumori. Ora apro gli armadi tranquilla e Luna gioca sicura in
          tutta la casa. Lo consiglio a tutti!" — Sofia, 32 anni
        </ReviewItem>
        <ReviewItem imgSrc="client2.webp" scrollToForm={scrollToForm}>
          "Il mio ristorante era infestato di scarafaggi. Avevo speso una fortuna in disinfestazioni, ma il problema
          tornava sempre. Con Pest Reject, in una settimana sono spariti! I clienti hanno notato la differenza e persino
          l'ASL ha fatto i complimenti. Mi è piaciuto così tanto che ne ho comprato un altro per casa!" — Alessandro, 40
          anni
        </ReviewItem>
        <ReviewItem imgSrc="client3.webp" scrollToForm={scrollToForm}>
          "Nel mio vecchio appartamento c'erano formiche ovunque. Usavo prodotti chimici, ma mio fratellino ha avuto
          un'allergia. Poi ho scoperto Pest Reject: niente sostanze tossiche, facile da usare e in un mese non ho più
          visto formiche. Mia mamma si è tranquillizzata e anch'io finalmente!" — Matteo, 28 anni
        </ReviewItem>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
