import styles from "./ButtonCard.module.scss";

export default function ButtonCard({ employee, setActiveEmployee }) {
  const { title, name, picture } = employee;

  return (
    <button className={styles.button} onClick={() => setActiveEmployee(employee)}>
      <img src={picture.sourceUrl} alt={picture.altText} />
      <article className={styles.text}>
        <h2>{name}</h2>
        {<p>{title}</p>}
      </article>
    </button>
  );
}
