import ButtonNavigate from "../Buttons/ButtonNavigate";
import styles from "./BookingOverview.module.scss";

export default function BookingOverview() {
  return (
    <div className={styles.wrapper}>
      <h2>Bokningen är nu fulländad!</h2>
      <p>Ett kvitto samt en bokningsbekräftelse har skickats till den angivna mejladressen.</p>
      <p>Vi ses i sadeln och du glöm inte hjälmen 😃</p>
      <img src="/icons/DressageIcon.svg" alt="häst ikon" />
      <ButtonNavigate navigate="/rida/kurser" text="Våra kurser" />
    </div>
  );
}
