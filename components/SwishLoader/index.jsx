import { useEffect } from "react";
import styles from "./SwishLoader.module.scss";

export default function SwishLoader({ setShowRegForm }) {
  useEffect(() => {
    const simulatePaymentDone = setTimeout(() => {
      setShowRegForm("Overview");
    }, 3000);
    return () => clearTimeout(simulatePaymentDone);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2>Öppna Swish appen i din mobil för att genomföra betalningen</h2>
      <div className={styles.imgWrapper}>
        <img src="/icons/swish.png" alt="Swish ikon" />
      </div>
      <p>När betalningen är genomförd kommer du automatiskt till nästa steg</p>
    </section>
  );
}
