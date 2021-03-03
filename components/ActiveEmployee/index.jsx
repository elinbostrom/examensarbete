import styles from "./ActiveEmployee.module.scss";

export default function ActiveEmployee({ data }) {
  const { picture, name, title, description } = data;
  return (
    <section className={styles.wrapper}>
      <img src={picture.sourceUrl} alt={picture.altText} />
      <section className={styles.text}>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
      </section>
      {data.email && (
        <section className={styles.contact}>
          {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
          {data.number && <p>{data.number}</p>}
        </section>
      )}
    </section>
  );
}
