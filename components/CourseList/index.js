import styles from './CourseList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faStar, faUsers, faTag } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react';
import { LessonsCoursesContext } from '../../contexts/LessonCoursesProvider';

export default function index({ courseInfo }) {
  const { time, spots, price, level, date } = courseInfo;
  const { placesLeft, setPlacesLeft } = useContext(LessonsCoursesContext);

  useEffect(() => { setPlacesLeft(spots) }, [])

  return (
    <ul className={styles.infolist}>
      <li>
        <FontAwesomeIcon icon={faClock} />
        <p>{time} minuter</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faCalendar} />
        <p>{date}</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faStar} />
        <p>{level}</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faTag} />
        <p>{price} kr</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faUsers} />
        <p>{`${placesLeft} av ${spots} platser kvar`}</p>
      </li>
    </ul>
  )
}
