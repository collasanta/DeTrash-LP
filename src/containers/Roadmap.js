import React from 'react'
import { images } from '../assets';
import RoadmapCard from '../cards/RoadmapCard';

const styles = {
   container: `py-[70px] space-y-4  flex flex-col justify-center bg-[#ebf6ff]`,
   header: `font-[corbel] text-[45px] text-center px-[20px] leading-[50px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   green: `text-[#5bbaeb]`,
}

const roadmapdata = [
   [{title:"1. LANÇAMENTO", description:"Lançamento oficial do token RECY para iniciar a capitalização do projeto", image: images.rm2}],
   [{title:"2. PROJETOS", description:"Alocamento da verba capitalizada em projetos com ONGS parceiras", image: images.rm4}],
   [{title:"3. LISTAGEM", description:"Listagem oficial do token RECY no mercado secundário ", image: images.rm3}],
   [{title:"4. DEFI", description:"Desenvolvimento de sistemas de recompensa com staking", image: images.rm1}],
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