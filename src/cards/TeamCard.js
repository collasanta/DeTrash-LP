import React from 'react'

const TeamCard = ({cardinfo}) => {
   const title = cardinfo.title
   const description = cardinfo.description
   const image = cardinfo.image

   const styles = {
      container: ` p-3 m-3 md:min-w-[300px]  flex flex-row md: justify-center md:flex-col mx-auto  `,
      container2: `flex flex-col md:mx-auto md:space-y-[-20px] md:justify-center`,
      image: ` w-[180px] h-[180px]  md:mx-auto md:mb-[20px]  `,
      titlebox: `z-0 hover:bg-[#bcbae5] bg-[#6e45c7] shadow-md w-[280px]  h-[60px] mx-0 md:mx-auto py-[5px]  rounded-r-full `,
      title: ` font-[pix] text-white text-[30px] text-center   `,
      descbox: `z-1 bg-[#f1f1f1] p-2 w-[280px] h-[120px] mx-[10px] pt-[30px] md:pt-[40px] mx-0 md:mx-auto pb-[10px] rounded-r-full  `,
      desc: ` font-[minitel] text-[14px] text-center   `,

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