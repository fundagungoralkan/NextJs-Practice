import Image from "next/image";
import styles from "./page.module.css";
import Hero from 'public/hero.png'

export default function Home() {
  return (
   <div>
   <Image width={500} height={500}  src="https://images.pexels.com/photos/17565564/pexels-photo-17565564/free-photo-of-lighthouse-among-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"  alt=""  className={styles.img}/>
   </div>
  );
}