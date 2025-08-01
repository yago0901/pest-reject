import { Montserrat } from "next/font/google";
import "./globals.css";

import styles from "../app/page.module.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pest Reject | Libera la tua casa da insetti e roditori senza veleni",
  description:
    "Soluzione ecologica a ultrasuoni per eliminare scarafaggi, zanzare, topi e altri parassiti. Sicuro per bambini e animali domestici - basta collegare e dimenticare!",
  openGraph: {
    title: "Pest Reject: Repellente ad Ultrasuoni per Insetti e Topi",
    description:
      "Addio a scarafaggi, formiche e roditori con la tecnologia a ultrasuoni. Senza prodotti chimici, senza odori, efficace in 24 ore!",
    images: [
      {
        url: "URL_IMMAGINE_PEST_REJECT_IT", // Inserisci URL reale
        width: 1200,
        height: 630,
      },
    ],
    url: "https://pestreject.it", // Usa il tuo dominio .it
    type: "website",
    locale: "it_IT", // Impostato per l'Italia
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P9HBP5QX');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.variable} `} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9HBP5QX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2025 - Dev Assina - All rights reserved / Tutti i diritti riservati.</p>
          </div>
          <div>
            <a href="https://land1.abxyz.info/policy_gdpr/-7EBRQCgQAAAEBAzqWA0ioNyWIAfoHAAMPpX7VZxERChEJIhENQhENWgdubDIAAH9hZGNvbWJv_zduanRGdGpuAANlOA">
              Privacy policy /
            </a>
            <a href="https://ac-feedback.com/report_form/">report</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
