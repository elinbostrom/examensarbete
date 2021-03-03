import { useEffect, useState } from "react";
import styles from "./ReviewBooking.module.scss";
import { IoIosArrowDroprightCircle, IoMdCloseCircleOutline } from "react-icons/io";

export default function ReviewBooking({ course, clientInfo, setShowRegForm }) {
  const [checkedNumber, setCheckedNumber] = useState(true);
  const [phonenumber, setPhonenumber] = useState("");

  useEffect(() => {}, [phonenumber]);

  const handleClick = () => {
    setPhonenumber(`0${clientInfo.phone}`);
    setCheckedNumber(true);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Översikt anmälan till "{course.title}"</h2>
      <div className={styles.clientinfo}>
        <strong>Namn</strong>
        <p className={styles.name}>{`${clientInfo.name} ${clientInfo.lastname}`}</p>
        <strong>Emailadress</strong>
        <p>{clientInfo.email}</p>
        <strong>Telefonnummer</strong>
        <p>0{clientInfo.phone}</p>
      </div>
      <div className={styles.paymentWrapper}>
        <h3>Betalning</h3>
        <p>
          <span>Total kostnad: </span>
          {course.price} SEK (inkl. moms)
        </p>
        <div className={styles.payment}>
          <p>Vill du använda samma angivna telefonnummer till swish?</p>
          {checkedNumber && (
            <>
              <button
                className={phonenumber.length > 8 ? styles.choosenbtn : styles.notchoosenbtn}
                onClick={handleClick}
              >
                Ja
              </button>
              <button className={styles.notchoosenbtn} onClick={() => setCheckedNumber(false)}>
                Nej
              </button>
            </>
          )}
          {!checkedNumber && (
            <div className={styles.phoneInput}>
              <input
                type="text"
                name="phone"
                placeholder="ex. 070000900"
                value={phonenumber}
                onChange={e => setPhonenumber(e.target.value)}
              />
              <button onClick={() => setCheckedNumber(true)}>
                <IoMdCloseCircleOutline />
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setShowRegForm("SwishLoader")}
        className={phonenumber.length > 8 ? styles.next : styles.disabledNext}
      >
        Betala med Swish
        <img src="/icons/swish.png" alt="Swish Ikon" />
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
}
