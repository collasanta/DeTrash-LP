import React from 'react'
import { images } from '../assets'

const styles = {
  container: `pt-[30px] flex flex-1 justify-center bg-[#ebf6ff]`,
  img: `w-[258px] h-[182px] `,
  c2: `bg-[#ebf6ff] text-center text-[30px] font-[Kollektif] pb-[30px]`,
}

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <a href='https://detrashtoken.com'>
          <img src={images.dtlogo2} className={styles.img} alt=''></img>
        </a>
      </div>
      <div className={styles.c2}>
        <a href='https://detrashtoken.com'>DeTrashToken.com</a>
      </div>
    </>

  )
}

export default Footer