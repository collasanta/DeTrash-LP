import React from 'react'
import { useTranslation } from "react-i18next";


const styles ={
   container: `space-y-4 flex flex-col justify-center pt-[70px] pb-[70px] `,
   about1: `font-[Kollektif]  text-[30px] text-center px-[20px]  leading-[50px]`,
   rev: `font-[Kollektif] text-[30px] text-[#013a81]`,
   about2: ` font-[Kollektif] text-[25px] text-center px-[40px] max-w-[800px] mx-auto text-[#7c8591] `,
}

const About = () => {
  const { t } = useTranslation();

  return (
     <>
      <div className={styles.container} id="SOBRE">
         <p className={styles.about1} >
         {t("TOKENS QUE LIMPAM O")}  <span className={styles.rev}> {t("MUNDO")} </span>
         </p>
         <div className={styles.about2}>
         {t("DESCRICAO CURTA TOKEN")}
         </div>
      </div>
     </>
  )
}

export default About