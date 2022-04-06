import React from 'react'

const styles = {
   container: `flex w-[300px] `,
   imagebox: `py-[5px] w-[100px] h-[70px] bg-[#fef4f5] flex justify-center `,
   image:`max-w-[90px] max-h-[60px]  `,
   info:`max-w-[200px] ml-[20px] flex flex-col text-left `,
   name:`font-[minitel] align-bottom`,
   percentage:` font-[pix] text-[30px] align-middle text-[#45c76e]`,
}


const TraitItem = ({ itemname, chance, img }) => {

  return (
    <>
      <div className={styles.container}>

         <div className={styles.imagebox}>
            <img className={styles.image} src={img} alt=""></img>
         </div>

         <div className={styles.info}>
            <div className={styles.percentage}>{chance}</div>
            <div className={styles.name}>{itemname}</div>
         </div>

       </div>
    </>
  )
}

export default TraitItem