import React from 'react'
import { images } from '../assets';
import RoadmapCard from '../cards/RoadmapCard';

const styles = {
   container: `py-[70px] space-y-4  flex flex-col justify-center bg-[#ebf6ff]`,
   header: `font-[Kollektif] text-[45px] text-center px-[20px] leading-[50px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   green: `text-[#5BBAEB]`,
}

const roadmapdata = [
   [{title:"1. cRECY Deploy", description:"Desenvolvimento do tokenomics, whitepaper e contrato inteligente do cRECY", image: images.rm2}],
   [{title:"2. DApp Beta", description:"Lançamento da primeira versão do RECY App com as funções de submeter relatórios de reciclagem, chat entre usuários geolocalização de coleta", image: images.rm4}],
   [{title:"3. Primeira Cidade", description:"Substituir o sistema atual de coleta de resíduos de uma cidade", image: images.rm3}],
   [{title:"4. DApp Completo", description:"Lançamento da versão completa do aplicativo com exchange, auditoria de relatórios, staking, integração de nodes e marketplace de recicláveis ara fornecimento para indústria", image: images.rm1}],
   [{title:"5. DAO", description:"Descentralização da governança através do lançamento de um token de governança", image: images.rm5}],
]

const Roadmap = () => {
  return (
     <>
     
     <div className={styles.container} id="ROADMAP">
         
         <div className={styles.header}>ROAD<span className={styles.green}>MAP</span></div>
     
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