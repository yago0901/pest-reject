import "../page.module.css";
import styles from "../../app/page.module.css";
import Script from 'next/script';

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "95.7vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div className={styles.title}>
        <h1>🎉 Obrigado pela sua compra!</h1>
        <p>Recebemos seu pedido com sucesso.</p>
      </div>

      <div className={styles.rightText}>
        <h2>🚀 Um de nossos atendentes entrará em contato em breve.</h2>
        <p>Fique atento ao seu telefone ou e-mail. Por favor, aguarde o nosso contato!</p>
      </div>

      <div className={styles.containerButton}>
        <div styles={{ width: "50%" }}>
          <button className={styles.heroBtn}>Voltar para a Página Inicial</button>
        </div>
      </div>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16760579148/xk3tCMLn_PwaEMzIiLg-',
            'value': 21.0,
            'currency': 'USD',
            'transaction_id': ''
          });
        `}
      </Script>
    </div>
  );
};

export default App;
