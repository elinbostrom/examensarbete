import styles from "./TextInformationSection.module.scss";

export default function TextInformationSection({ data }) {
  const { title, description } = data;

  return (
    <section className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
