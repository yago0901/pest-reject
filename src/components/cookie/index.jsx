"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../app/page.module.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleResponse = () => {
    setShowBanner(false);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className={styles.cookieOverlay}></div>
      <div className={styles.cookieBar}>
        <div className={styles.cookieContent}>
          <p>
            Utilizziamo i cookie per migliorare la vostra esperienza. Alcuni cookie sono essenziali, altri ci aiutano ad
            analizzare il traffico. Oltre ad accettare di fornirci i vostri dati attraverso il modulo, potete scegliere
            quali cookie accettare.
            <Link href="/politica-de-cookies" className={styles.cookiePolicyLink}>
              Scopri di più nella nostra Politica dei Cookie
            </Link>
          </p>
          <div className={styles.cookieButtons}>
            <button onClick={handleReject} className={styles.cookieReject}>
              Rifiuta i non essenziali
            </button>
            <button onClick={handleAccept} className={styles.cookieAccept}>
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
