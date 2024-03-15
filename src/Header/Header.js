import React from 'react'
import styles from './Header.module.css'
export const Header = () => {
  return (
    <div className={`text-center bg-danger text-white ${styles.header}`}>
      End to End application
    </div>
  )
}

