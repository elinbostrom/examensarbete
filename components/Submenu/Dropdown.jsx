import React from 'react'
import { MenuItems } from './MenuItems'
import Link from 'next/link'
import styles from './Dropdown.module.scss'

export default function Dropdown({isOpen, setIsOpen}) {
  return (
    <>
    {isOpen && 
    <section className={styles.wrapper} onMouseLeave={() => setIsOpen(false)}>
      <div className={styles.menu}>
 <h3>Häst</h3>
    <ul className={styles.menulist}>
      {MenuItems.map(item => {
        if(item.category === 'Häst') {
          return (
            <li key={item.id} onClick={() => setIsOpen(false)}>
              <Link className={item.cName} href={item.path}>{item.title}</Link>
            </li>
          )
        }
      })}
    </ul>
      <h3>Ponny</h3>
    <ul className={styles.menulist}>
      {MenuItems.map(item => {
        if(item.category === 'Ponny') {
          return (
            <li key={item.id} onClick={() => setIsOpen(false)}>
              <Link className={item.cName} href={item.path}>{item.title}</Link>
            </li>
          )
        }
      })}
    </ul>
      </div>
    </section>
    }
    </>
  )
}
