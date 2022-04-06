import React from 'react'
import { images } from '../assets';
import RoadmapCard from '../cards/RoadmapCard';

const styles = {
   container: ` space-y-4 py-[50px] flex flex-col justify-center bg-[#edf2f8]`,
   header: `font-[minitel] text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   purple: `text-[#6e45c7]`,
}

const roadmapdata = [
   [{title:"1. MINT PHASE", description:"Official Launch of the 10.000 Developer Punks NFT Collection on Polygon, Availiable to Mint", image: images.rm1}],
   [{title:"2. COMMUNITY BUILD", description:"Official Launch of Discord Community for Web3 Devs, availiable only to Dev Punk Holders", image: images.rm2}],
   [{title:"3. TUTORIAL DROPS", description:"Launch of weekly tutorial videos on how to develop web3 applications inside the community", image: images.rm3}],
   [{title:"4. WORLD MEETUPS", description:"Presential events around the world holded by the community, availiable only to members", image: images.rm4}],
]

const Roadmap = () => {
  return (
     <>
     
     <div className={styles.container}>
         
         <div className={styles.header}>ROAD<span className={styles.purple}>MAP</span></div>
     
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