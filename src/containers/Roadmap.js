import React from 'react'
import { images } from '../assets';
import RoadmapCard from '../cards/RoadmapCard';
import { useTranslation } from "react-i18next";



const styles = {
   container: `py-[70px] space-y-4  flex flex-col justify-center bg-[#ebf6ff]`,
   header: `font-[Kollektif] text-[45px] text-center px-[20px] leading-[50px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   green: `text-[#5BBAEB]`,
}



const Roadmap = () => {
  const { t } = useTranslation();

  const roadmapdata = [
    [{title:"1. cRECY Deploy", description:t("Desenvolvimento do tokenomics, whitepaper e contrato inteligente do cRECY"), image: images.rm2}],
    [{title:"2. DApp Beta", description:t("Lançamento da primeira versão do RECY App com as funções de submeter relatórios de reciclagem, chat entre usuários geolocalização de coleta"), image: images.rm4}],
    [{title:`3. ${t("Primeira Cidade")}`, description:t("card 3 desc"), image: images.rm3}],
    [{title:`4. DApp ${t("Completo")}`, description:t("card 4 desc"), image: images.rm1}],
    [{title:"5. DAO", description:t("card 5 desc"), image: images.rm5}],
 ]

  return (
    <>
      <div className={styles.container} id="ROADMAP">
          <div className={styles.header}>
            ROAD<span className={styles.green}>MAP</span>
          </div>
          <div className={styles.cardcontainer} >
              {roadmapdata.map(cardinfo=>(
                <div>
                  <RoadmapCard
                  cardinfo={cardinfo[0]}
                  />
                </div>
              ))}
          </div>
      </div>
    </>
  )
}

export default Roadmap