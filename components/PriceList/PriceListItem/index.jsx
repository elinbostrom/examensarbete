import styles from "./PriceListItem.module.scss";

export default function PriceListItem({ item }) {
  const { cost, description, orsMedlem, title } = item;

  return (
    <li className={styles.listItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.cost}>{cost}</p>
      {description && <p className={styles.description}>{description}</p>}
      {orsMedlem && <p className={styles.ors}>För ÖRS medlem</p>}
    </li>
  );
}
