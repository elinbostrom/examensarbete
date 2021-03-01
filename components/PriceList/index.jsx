import styles from "./PriceList.module.scss";
import PriceListItem from "./PriceListItem";

export default function PriceList({ data, category }) {
  return (
    <section className={styles.wrapper}>
      <h3>{category}</h3>
      <ul>
        {Array.isArray(data) &&
          data.map(item => {
            if (item.priceitem.category === category) {
              return <PriceListItem key={item.id} item={item.priceitem} />;
            }
          })}
      </ul>
    </section>
  );
}
