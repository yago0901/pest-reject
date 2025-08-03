"use client";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import formatItalianPhone from '@/utils/validationPhone';

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", marketingConsent: false });
  const [responseMessage, setResponseMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  // Contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.marketingConsent) {
      alert("Devi accettare le condizioni di marketing per procedere");
      return;
    }

    if (!formData.name || !formData.phone) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    if (formData.name.length < 4) {
      alert("Il nome deve contenere almeno 4 lettere");
      return;
    }

    const formattedPhone = formatItalianPhone(formData.phone);

    if (!formattedPhone) {
      alert("Numero di telefono non valido, sono richiesti 10 cifre.");
      return;
    }
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name, phone: formData.phone }),
      });

     const data = await res.json();

      setResponseMessage(data.message || data.error);

      if (res.ok) {
        setFormData({ name: "", phone: "" });
        router.push("/thanks-you");
      } else {
        alert(`Erro: ${data.error}`);
      }
    } catch (error) {
      alert("Errore nell'invio dell'ordine. Riprova più tardi.");
    }
  };

  return (
    <section className={styles.faqForm}>
      <div className={styles.container}>
        <div className={styles.faqFormDetails}>
          <div className={styles.faqFormItem2}>
            <div className={styles.containerForm}>
              <div className={styles.stockWarning}>⚠️ ULTIMI 12 PEZZI DISPONIBILI!</div>

              <div className={styles.benefitsContainer}>
                <h1 className={styles.offerTitle}>⚠️ OFFERTA LAMPÒ - SCADE TRA:</h1>
                <ul className={styles.benefitsList}>
                  <li>
                    <span className={styles.checkIcon}>✓</span> Elimina topi, scarafaggi e insetti in 24 ore
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span> 100% sicuro per bambini e animali domestici
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span> Senza prodotti chimici o odori
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span> Facile da usare - basta collegare alla presa
                  </li>
                </ul>
              </div>

              <div className={styles.productContainer}>
                <Image
                  alt="Pest Reject"
                  src="/produto-caixa.webp"
                  width={500}
                  height={300}
                  loading="lazy"
                  className={styles.productImage}
                />
              </div>

              <div className={styles.securitySeals}>
                <div className={styles.sealItem}>
                  <Image alt="Sito sicuro" src="/selo-seguranca.webp" width={500} height={300} loading="lazy" />
                  <Image alt="Garanzia 30 giorni" src="/selo-garantia.webp" width={500} height={300} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <form className={styles.faqFormItem} onSubmit={handleSubmit}>
            <div className={styles.containerForm}>
              <Image
                alt="Sconto 50%"
                src="/50off.gif"
                width={500}
                height={300}
                loading="lazy"
                className={styles.faqFormGif}
              />
              <div style={{ width: "100%", position: "relative", display: "flex", justifyContent: "center" }}>
                <Image
                  alt="Pest Reject"
                  src="/product-form.webp"
                  width={500}
                  height={300}
                  loading="lazy"
                  className={styles.faqFormImage}
                />

                <div className={styles.offerHeader}>
                  <div className={styles.countdown}>
                    <div className={styles.countdownSegment}>
                      <span className={styles.countdownNumber}>{timeLeft.hours.toString().padStart(2, "0")}</span>
                      <span className={styles.countdownLabel}>Ore</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownSegment}>
                      <span className={styles.countdownNumber}>{timeLeft.minutes.toString().padStart(2, "0")}</span>
                      <span className={styles.countdownLabel}>Minuti</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownSegment}>
                      <span className={styles.countdownNumber}>{timeLeft.seconds.toString().padStart(2, "0")}</span>
                      <span className={styles.countdownLabel}>Secondi</span>
                    </div>
                  </div>
                  <div className={styles.offerValue}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
                      <p className={styles.price}>
                        <span className={styles.oldPrice}>Da: 118 €</span>
                      </p>
                      <h1 className={styles.newPrice}>A: 59 €</h1>
                    </div>
                  </div>
                </div>
              </div>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Telefono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className={styles.consentCheckbox}>
                <input type="checkbox" id="marketingConsent" name="marketingConsent" onChange={handleChange} required />
                <label htmlFor="marketingConsent">
                  Accetto di ricevere comunicazioni di marketing (es. offerte speciali) via email/SMS. Potrò annullare
                  l'iscrizione in qualsiasi momento.
                </label>
              </div>
              <div className={styles.containerBtn}>
                <button type="submit" className={styles.formButton}>
                  <b>Ordina ora</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
