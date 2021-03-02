import styles from "./Article.module.scss";

export default function Article({ data, imgRight }) {
  const { title, description, picture } = data;

  return (
    <article className={imgRight ? styles.article : styles.article_left}>
      <section>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </section>
      {picture && <img src={picture.sourceUrl} alt={picture.altText} />}
    </article>
  );
}
