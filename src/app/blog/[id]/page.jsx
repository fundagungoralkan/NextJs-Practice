import React from 'react'
import styles from "./page.modules.css"
import Image from "next/image"

const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
    <div className={styles.info}>
      <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quaerat voluptatum natus, rerum ipsam eos sapiente officiis. Neque voluptates laborum facere qui minima! Iste possimus quia vel recusandae quos eligendi.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda magnam exercitationem repellendus itaque accusamus reprehenderit modi fugit beatae, reiciendis placeat enim, suscipit commodi cupiditate labore! Accusantium quia commodi amet.</p>
     
     <div className={styles.author}>
     <Image
     src="https://images.pexels.com/photos/29282323/pexels-photo-29282323/free-photo-of-symmetrical-architecture-in-berlin-courtyard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
     alt=""
     width={40}
     height={40}
     className={styles.avatar}
     />
     <span className={styles.username}>John Doe</span>
  </div>
 </div>

 <div className={styles.imageContainer}>
<Image
src="https://images.pexels.com/photos/29975679/pexels-photo-29975679/free-photo-of-sunflower-field-at-sunset-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
alt=""
fill={true}
className={styles.image}
/>
</div>
</div>

<div className={styles.content}>
 <p className={styles.text}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur facere expedita cumque fuga eos, officiis delectus quo corporis. Veniam sit eligendi aut voluptatum autem dicta neque optio magnam eaque.
  </p> 

</div>


    </div>
  )
}

export default BlogPost