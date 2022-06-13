import React from 'react'
import { images } from '../assets';

const styles ={
   container: `space-y-4 flex flex-col justify-center pt-[70px] pb-[70px]`,
   about1: `font-[corbel]  text-[30px] text-center px-[20px] leading-[50px]`,
   rev: `font-[corbel] text-[30px] text-[#64b6ac]`,
   about2: ` font-[corbel] text-[25px] text-center capitalize px-[40px] text-[#7c8591] `,
}

const About = () => {
  return (
     <>
      <div className={styles.container} id="SOBRE">
         <p className={styles.about1} >
            DESCRIÇÃO DO <span className={styles.rev}> PROJETO </span>
         </p>
         <div className={styles.about2}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
         </div>
      </div>
     </>
    
  )
}

export default About