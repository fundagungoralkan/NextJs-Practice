import React from 'react'
import styles from './page.module.css'
import Link from "next/link"
import Image from "next/image"

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/testId" className={styles.container}>
      <div className={styles.imageContainer}>
      <Image
      src="https://images.pexels.com/photos/29798552/pexels-photo-29798552/free-photo-of-serene-waterfall-in-lush-tasmanian-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      width={400}
      height={250}
      className={styles.imageContainer}
      />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}></h1>
        <p className={styles.dec}></p>
      </div> 
      </Link>
      <Link href="/testId" className={styles.container}>
      <div className={styles.imageContainer}>
      <Image
      src="https://images.pexels.com/photos/29798552/pexels-photo-29798552/free-photo-of-serene-waterfall-in-lush-tasmanian-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      width={400}
      height={250}
      className={styles.imageContainer}
      />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}></h1>
        <p className={styles.dec}></p>
      </div> 
      </Link>
      </div>
  )
}

export default Blog