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
   [{title:"1. MINT PHASE", description:"Official Launch of the 10.000 Developer Punks NFT Collection on Polygon, Availiable to Mint", image: images.rm1}],
   [{title:"2. COMMUNITY BUILD", description:"Official Launch of Discord Community for Web3 Devs, availiable only to Dev Punk Holders", image: images.rm2}],
   [{title:"3. TUTORIAL DROPS", description:"Launch of weekly tutorial videos on how to develop web3 applications inside the community", image: images.rm3}],
   [{title:"4. WORLD MEETUPS", description:"Online and presential events holded by the community, availiable only to members", image: images.rm4}],
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