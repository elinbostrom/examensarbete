import { useState } from 'react'
import styles from './ReviewBooking.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

export default function ReviewBooking({ course, clientInfo }) {
  const [checkedNumber, setCheckedNumber] = useState(true)
  const [phonenumber, setPhonenumber] = useState("")

  return (
    <div className={styles.wrapper}>
      <h2>Översikt anmälan till "{course.title}"</h2>
      <div className={styles.clientinfo}>
        <strong>Namn</strong>
        <p>{`${clientInfo.name} ${clientInfo.lastname}`}</p>
        <strong>Emailadress</strong>
        <p>{clientInfo.email}</p>
        <strong>Telefonnummer</strong>
        <p>0{clientInfo.phone}</p>
      </div>
      <div className={styles.payment}>
        <h3>Betalning</h3>
        <p><span>Total kostnad: </span>{course.price} SEK</p>
        <div>
          <p>Använd samma telefonnummer till swish</p>
          <button onClick={() => setCheckedNumber(true)}>Ja</button>
          <button onClick={() => setCheckedNumber(false)}>Nej</button>
          {!checkedNumber &&
            <input
              type="text"
              name="phone"
              placeholder="ex. 070000900"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)} />}
        </div>
      </div>

      <button>Gå till betalning <IoIosArrowForward /></button>
    </div>
  )
}
