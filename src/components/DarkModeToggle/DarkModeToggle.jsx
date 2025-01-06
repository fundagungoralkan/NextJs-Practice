"use client"


import React, { useContext } from 'react'
import styles from "./darkModeToggle.css"
import { ThemeContext } from '../../../context/ThemeContext'

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
       <div className={styles.icon}>🌙</div>
       <div className={styles.icon}>🌞</div>
       <div className={styles.ball}/>
    </div>
  )
}

export default DarkModeToggle