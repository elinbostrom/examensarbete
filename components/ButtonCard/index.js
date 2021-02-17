import { MenuItems } from '../Submenu/MenuItems';
import styles from './ButtonCard.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router';

export default function index({ info }) {
  const description = info.description ?? null;
  const router = useRouter();

  return (
    <button className={cn({
      [styles.dressage]: info.title === "Dressyr",
      [styles.jumping]: info.title === "Hoppning",
      [styles.summer]: info.title === "Sommarkurser",
      [styles.christmas]: info.title === "Julkurser",
      [styles.non]: info.title === "Övrigt"
    })}
      onClick={() => router.push(info.path)}>
      <article className={styles.text}>
        <h2>{info.title}</h2>
        {description && <p>Beskrivning</p>}
      </article>
    </button>
  )
}
