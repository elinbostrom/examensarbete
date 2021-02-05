import React from 'react'
import styles from './NavigationDot.module.scss'
import cn from 'classnames';

export default function NavigationDot({ active }) {
  return (
    <div className={cn({
      [styles.dot]: active === false,
      [styles.active_dot]: active === true
    })}>

    </div>
  )
}
