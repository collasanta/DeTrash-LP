import React from 'react'

const RoadmapCard = ({cardinfo}) => {
   const title = cardinfo.title
   const description = cardinfo.description
   const image = cardinfo.image

   const styles = {
      container: ` p-3 m-3 md:min-w-[400px]  flex flex-col md:flex-row mx-auto  `,
      container2: `flex flex-col mx-auto space-y-[-20px] justify-center `,
      image: ` w-[100px] h-[110px] mx-auto mb-[20px] `,
      titlebox: `z-0 hover:bg-[#5BBAEB] bg-[#64b6a6] shadow-md w-[290px]  h-[60px] mx-auto py-[5px]  rounded-full `,
      title: ` font-[corbel] text-white text-[27px] text-center   `,
      descbox: `z-1 bg-[#ffffff] shadow-lg p-2 w-[280px] mx-[10px] rounded-[40px] pt-[30px] pb-[10px] `,
      desc: ` font-[corbel] text-[23px] text-center   `,

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

export default RoadmapCard