import styles from './CourseList.module.scss'
import { BsClock, BsCalendar, BsStar } from 'react-icons/bs'
import { FaMoneyCheck } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { useContext, useEffect } from 'react';
import { LessonsCoursesContext } from '../../contexts/LessonCoursesProvider';

export default function index({ courseInfo }) {
  const { time, spots, price, level, date } = courseInfo;
  const { placesLeft, setPlacesLeft } = useContext(LessonsCoursesContext);

  useEffect(() => { setPlacesLeft(spots) }, [])

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
        <p>{price} kr</p>
      </li>
      <li>
        <FiUsers />
        <p>{`${placesLeft} av ${spots} platser kvar`}</p>
      </li>
    </ul>
  )
}
