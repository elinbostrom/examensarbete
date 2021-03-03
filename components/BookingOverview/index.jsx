import ButtonNavigate from "../Buttons/ButtonNavigate";
import styles from "./BookingOverview.module.scss";

export default function BookingOverview() {
  return (
    <div className={styles.wrapper}>
      <h2>Bokningen är nu fulländad!</h2>
      <img src="/icons/DressageIcon.svg" alt="häst ikon" />
      <p>Ett kvitto samt en bokningsbekräftelse har skickats till den angivna mejladressen.</p>
      <p>Vi ses i sadeln och du glöm inte hjälmen 😃</p>
      <ButtonNavigate navigate="/rida/kurser" text="Våra kurser" />
    </div>
  );
}
