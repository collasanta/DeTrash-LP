import React from 'react'
import { images } from '../assets'

const TeamCard = ({cardinfo}) => {
   const title = cardinfo.title
   const description = cardinfo.description
   const image = cardinfo.image

   const styles = {
      container: ` p-3 m-3 md:min-w-[300px]  flex flex-row justify-center md:flex-col   `,
      container2: `flex flex-col justify-end`,
      image: ` min-w-[150px] max-w-[150px] min-h-[120px] md:max-w-[220px]  md:mx-auto md:mb-[20px]  `,
      titlebox: `z-0 hover:bg-[#5BBAEB] bg-[#64B6AC] shadow-md w-[220px]  md:w-[280px] h-[45px] md:max-w-[280px] md:h-[60px]  py-[5px]  rounded-r-full `,
      title: ` ml-[10px] font-[corbel] text-white md:text-[25px] text-[20px] ml-[10px]`,
      descbox: `max-w-[280px] bg-[#f1f1f1f1] rounded-tr-[90px] rounded-br-[40px]`,
      desc: ` font-[corbel] md:text-[18px] text-[12px] ml-[5px]  `,
      icons: `fill-[#ffffff]`,
      socialiconscontainer: `mx-1 flex p-1 space-x-[10px]`,

   }

  return (
    <>
      <div className={styles.container}>

         <div className={styles.image} >
            <img src={image} alt=""/>
         </div>

         <div className={styles.container2} >

            <div className={styles.titlebox}>
               <div className={styles.title}>
                  {title}
               </div>

            </div>

            <div className={styles.descbox}>
               <div className={styles.socialiconscontainer}>
               <a href={cardinfo.github}> <img className={styles.icons} src={images.gh} alt=""></img> </a>
               <a href={cardinfo.linkedin}> <img className={styles.icons} src={images.ln} alt=""></img> </a>
               <a href={cardinfo.twitter}> <img className={styles.icons} src={images.tt} alt=""></img> </a>
               </div>

               <div className={styles.desc}>
                  {description}
               </div>
            </div>

         </div>

      </div>
    </>
  )
}

export default TeamCard