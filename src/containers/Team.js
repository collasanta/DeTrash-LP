import React from 'react'
import { images } from '../assets'
import TeamCard from '../cards/TeamCard';

const styles = {
   container: `space-y-4 pt-[40px] flex flex-col justify-center bg-[#ffffff]   `,
   container2: `space-y-4 flex flex-col md:flex-row justify-center bg-[#ffffff]`,
   cardcontainer: `flex flex-col justify-center bg-[#ffffff] md:flex-row     `,
   header: `font-[minitel] text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   purple: `text-[#6e45c7]`,
}

const teamdata = [
   [{title:"Victor Collasanta", description:"Full Stack Web3 Developer and 33Web Founder", image: images.p2}],
   [{title:"Neo", description:"CEO and project leader", image: images.p3}],
   [{title:"Morpheus", description:"Advisor on how to scape the Matrix", image: images.p1}],
]
const Team = () => {
  return (
     <>
      <div className={styles.container}>
         <div className={styles.header} > THE <span className={styles.purple}>TEAM</span> </div>
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