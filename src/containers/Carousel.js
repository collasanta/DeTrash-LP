import React from 'react'
import { images } from '../assets';


const Carousel = () => {
   const styles = {
      wrapper: `overflow-x-hidden`,
      imagescontainer: `pt-[50px] pb-[10px] pt-[80px] bg-[#edf2f8] flex w-[4400px] md:w-[5000px] lg:w-[6000px] animate-move `,
      image: `bg-[#ffffff] p-1 my-2 shadow-lg`,
      card: `px-2 `
   }
  
   var punks = [images.p1, images.p2, images.p3, images.p4, images.p5, images.p6, images.p7, images.p8, images.p9, images.p10 ]

  return (
         <>
         
         <div className={styles.wrapper}>
            <div className={styles.imagescontainer}>

               {punks.map(punk=>(
                  <div className={styles.card}>
                     <img className={styles.image} src={punk} alt="" />
                  </div>
               ))}

               {punks.map(punk=>(
                  <div className={styles.card}>
                     <img className={styles.image} src={punk} alt="" />
                  </div>
               ))}

            </div>
         </div>         

         </>

  )
}
export default Carousel