import styles from './CourseList.module.scss'
import { useMemo } from 'react'

// Components
import { BsClock, BsCalendar, BsStar } from 'react-icons/bs'
import { FaMoneyCheck } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

export default function CourseList({ courseInfo }) {
  const { time, spots, price, level, date } = courseInfo;
  const createStringDependingOnSpots = useMemo(() => {
    let spotsLeftString;

    if (spots.left === null) {
      spotsLeftString = "FULLSATT"
    }
    else {
      spotsLeftString = `${spots.left} av ${spots.total} platser kvar`
    }
    return spotsLeftString;
  }, [spots])


  return (
    <ul className={styles.infolist}>
      <li>
        <BsClock />
        <p>{time} minuter</p>
      </li>
      <li>
        <BsCalendar />
        <p>{date}</p>
      </li>
      <li>
        <BsStar />
        <p>{level}</p>
      </li>
      <li>
        <FaMoneyCheck />
        <p>{price} kr inkl. moms</p>
      </li>
      <li className={spots.left <= 3 ? styles.warning : null}>
        <FiUsers />
        <p>{createStringDependingOnSpots}</p>
      </li>
    </ul>
  )
}
