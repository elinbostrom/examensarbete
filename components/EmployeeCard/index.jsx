import styles from "./EmployeeCard.module.scss";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

export default function EmployeeCard({ employee }) {
  const { title, name, picture, description } = employee;
  const [seeMore, setSeeMore] = useState(false);

  return (
    <section className={seeMore ? styles.card : styles.closed_card}>
      <button onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Läs mindre" : "Läs mer"}</button>
      <img src={picture.sourceUrl} alt={picture.altText} />
      <section className={styles.text}>
        <h3>{name}</h3>
        <p>{title}</p>
        {seeMore && <p>{description}</p>}
      </section>
      {seeMore && (
        <div className={styles.contact}>
          {employee.number && (
            <p>
              <AiFillPhone />
              {employee.number}
            </p>
          )}
          {employee.email && (
            <a href={`mailto:${employee.email}`}>
              <AiOutlineMail />
              {employee.email}
            </a>
          )}
        </div>
      )}
    </section>
  );
}
