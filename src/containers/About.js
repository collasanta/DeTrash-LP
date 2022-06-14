import React from 'react'
import { images } from '../assets';

const styles ={
   container: `space-y-4 flex flex-col justify-center pt-[70px] pb-[70px] `,
   about1: `font-[Kollektif]  text-[30px] text-center px-[20px] leading-[50px]`,
   rev: `font-[Kollektif] text-[30px] text-[#155ad5]`,
   about2: ` font-[Kollektif] text-[25px] text-center px-[40px] max-w-[800px] mx-auto text-[#7c8591] `,
}

const About = () => {
  return (
     <>
      <div className={styles.container} id="SOBRE">
         <p className={styles.about1} >
            TOKENS QUE LIMPAM O <span className={styles.rev}> MUNDO </span>
         </p>
         <div className={styles.about2}>
         Começamos com o primeiro token para limpar os oceanos, o RECY. Mas queremos ir muito além para transformar como podemos manter todo o planeta limpo de forma descentralizada, mais transparente e mais eficiente.

         </div>
      </div>
     </>
    
  )
}

export default About