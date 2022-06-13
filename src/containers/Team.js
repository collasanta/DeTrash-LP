import React from 'react'
import { images } from '../assets'
import TeamCard from '../cards/TeamCard';

const styles = {
   container: `space-y-4 pt-[70px] pb-[30px] flex flex-col justify-center bg-[#ffffff]   `,
   container2: `space-y-4 flex flex-col md:flex-row justify-center bg-[#ffffff] pb-[70px]`,
   cardcontainer: `flex flex-col justify-center bg-[#ffffff] md:flex-row      `,
   header: `font-[corbel] text-[45px] text-center px-[20px]`,
   purple: `text-[#5bbaeb]`,
   socialiconscontainer:``,
}

const teamdata = [
   [{title:"VICTOR COLLASANTA", description:"Full Stack Web3 Developer and 33Web Founder", image: images.p2, linkedin:"https://www.linkedin.com/in/victor-collasanta-a4b9a913b/", twitter:'https://twitter.com/0xKabutoDev', github:'https://github.com/collasanta',}],
   [{title:"MORPHEUS", description:"Business Advisor on how to scape the Matrix", image: images.p1, linkedin:"#team", twitter:'#team', github:'#team',}],
   [{title:"NEO", description:"CEO, helping awakening people from the dream", image: images.p3, linkedin:"#team", twitter:'#team', github:'#team',}],
]
const Team = () => {
  return (
     <>
      <div className={styles.container} id="EQUIPE" >
         <div className={styles.header} > A <span className={styles.purple}>EQUIPE</span> </div>
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