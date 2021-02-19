import styles from './CourseCard.module.scss';
import ButtonBlockNavigate from '../ButtonBlockNavigate'
import CourseList from '../CourseList'
import { useEffect, useState } from 'react';

export default function index({ id, courseInfo }) {
const { title, instructor, description } = courseInfo;
const [shortenDescription, setShortenDescription] = useState(null)
const [btnText, setBtnText] = useState('Läs mer')

useEffect(()=> {
  if(description.length > 450) {
    setShortenDescription(`${description.slice(0, 450)}...`)
  }
},[])

const handleClick = () => {

}

  return (
    <article className={styles.text}>
      <h3>{title}</h3>
      <p className={styles.instructor}><span>Instruktör:</span> {instructor}</p>
      <CourseList courseInfo={courseInfo}/>
      <ButtonBlockNavigate text="Anmäl dig till kursen" navigate={`/rida/boka-kurs/${id}`} />
      <p className={styles.description}>{description}</p>
      {description.length > 450 &&
      <button onClick={handleClick}>{btnText}</button>
      }
    </article>
  )
}
