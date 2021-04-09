import styles from "./NewsArticle.module.scss";
import { useRouter } from "next/router";

export default function NewsArticle({ postInfo, date, id, slug }) {
  const { title } = postInfo;
  date = date.replace("T", " | ");
  const router = useRouter();

  return (
    <li id={id} className={styles.closedPost}>
      <section className={styles.text}>
        <h2>{title}</h2>
        <p className={styles.date}>{date}</p>
      </section>
      <button onClick={() => router.push(`/stallnytt/${slug}`)}>Läs mer</button>
    </li>
  );
}
