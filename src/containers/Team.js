import React from 'react'
import { images } from '../assets'
import TeamCard from '../cards/TeamCard';
import { useTranslation } from "react-i18next";

const styles = {
   container: `space-y-4 pt-[70px] pb-[30px] flex flex-col justify-center bg-[#ffffff]   `,
   container2: `space-y-4 flex flex-col md:flex-row justify-center bg-[#ffffff] pb-[70px]`,
   cardcontainer: `flex flex-col justify-center bg-[#ffffff] lg:flex-row     `,
   header: `font-[Kollektif] text-[45px] text-center px-[20px]`,
   purple: `text-[#5BBAEB]`,
   socialiconscontainer:``,
}

const Team = () => {
  const { t } = useTranslation();
  const teamdata = [
    [{title:"Beatriz Siqueira", description:t("desc bia"), image: images.p2, linkedin:"https://www.linkedin.com/in/beatriz-siqueira-79a8b9147/", twitter:'https://twitter.com/LilSugarPiee', github:'https://github.com/biadebeatriz.com',}],
    [{title:"Philipp Teles", description:t("desc phi"), image: images.p1, linkedin:"https://www.linkedin.com/in/philipptvoh/", twitter:'https://www.twitter.com/telesvon', github:'',}],
    [{title:"Matheus Rocha", description:t("desc math"), image: images.p3, linkedin:"https://www.linkedin.com/in/matheus-dias-b62b1b52/", twitter:'', github:'',}],
 ]
  return (
     <>
      <div className={styles.container} id="EQUIPE" >
         <div className={styles.header} >
         {t("A")}  <span className={styles.purple}>{t("EQUIPE")}</span> 
          </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.cardcontainer} >
          {teamdata.map(cardinfo=>(
            <div>
              <TeamCard
                cardinfo={cardinfo[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team