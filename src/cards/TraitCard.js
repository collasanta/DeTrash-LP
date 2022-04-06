import React from 'react'
import TraitItem from './TraitItem'

const styles = {
   container: `bg-[#f1f1f1] shadow-lg flex flex-col p-3 container  mx-auto w-[400px]   md:w-[800px] md:flex-row flex-wrap justify-center `,
   header: `text-center text-[40px] font-[pix]  `,
   traitcontainer: `text-center`,
   card:`bg-white  my-2 mx-[10px] w-[350px] h-[70px] mx-auto shadow-md flex justify-start hover:opacity-50`,
}

const TraitCard = ({ traitname, traititems }) => {
  return (
     <>
         <div className={styles.header}> 
            <p>{traitname}</p>

         </div>

         <div className={styles.container}>

            {traititems.map(item=>(
                  <div className={styles.card}>
                  <TraitItem itemname={item.name} chance={item.chance} img={item.img}/>
                  </div>
            ))}



         </div>
    </>
  )
}

export default TraitCard