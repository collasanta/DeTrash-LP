import React from 'react'

const styles ={
   container: `space-y-4 flex flex-col justify-center pb-[40px]`,
   about1: `font-[minitel]  text-[20px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   rev: `font-[minitel] text-[25px] text-[#6e45c7] md:text-[30px]`,
   about2: ` font-[minitel] text-[15px] text-center capitalize px-[40px] text-[#7c8591] `,

}

const About = () => {
  return (
     <>
      <div className={styles.container}>
         <p className={styles.about1}>
            JOIN THE DEVS <br/> LEADING THE <br/> <span className={styles.rev}>WEB3 REVOLUTION</span>
         </p>
         <div className={styles.about2}>
            We are the union of 10.000 punk developers working on developing disruptive solutions to advance humanity 
         </div>
      </div>
     </>
    
  )
}

export default About