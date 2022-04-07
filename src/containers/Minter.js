import React from 'react'
import { useState } from 'react';
import { images } from '../assets';

const styles = {
   bg: `bg-[#ffffff] p-10 flex justify-center`,
   container: `px-3 py-3 flex flex-col sm:flex-row justify-center bg-[#f2f5fa] md:max-w-2xl shadow-lg  `,
   div1: ` p-2 sm:w-1/2 flex flex-col justify-center text-center space-y-2`,
   div2: ` p-2 sm:w-1/2 align-middle text-center flex flex-col justify-center space-y-2` ,
   image: ` px-6 py-0 `,
   supply: `font-[pix] text-lg bg-[#ffffff] mx-6`,
   btnconnect: `font-[pix] animate-pulse text-lg bg-[#6e45c7] hover:bg-[#45c76e] text-white font-bold p-4  shadow-md`,
   amount: `font-[pix] text-lg`,
   btnmint: `font-[pix] text-lg bg-[#6e45c7] hover:bg-[#45c76e] text-white font-bold py-4 px-6 shadow-md`,
   counterbtnp: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`,
   counterbtnn: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`,
   counter: `bg-gray-200 text-gray-800 font-bold py-3 px-4`,
   asupply: `text-[30px] text-[#45c76e]`,
}

const Minter = () => {
   const [mintAmount, setmintAmount] = useState(1);
   const NFTprice = 0.75 ; //MATIC

  return (
    <>
   
      <div className={styles.bg}>
         <div className={styles.container}>

            <div className={styles.div1}>

               <div className={styles.image}>
                  <img  src={images.phidden} alt=""/>
               </div>

               <div className={styles.supply}>
                  <span>SUPPLY: </span>
                  <span className={styles.asupply}>30</span>/10.000
               </div>

            </div>

            <div className={styles.div2}>


               <div className={styles.btnconnect}>
                  <button>CONNECT WALLET</button>
               </div>

                              


               <div className={styles.amount}>
                  <div>Amount:</div>
                  <button className={styles.counterbtnp} onClick={() => {setmintAmount(mintAmount-1)}}>-</button>
                  <span className={styles.counter}>{mintAmount}</span>
                  <button className={styles.counterbtnn} onClick={() => {setmintAmount(mintAmount+1)}}>+</button>
                </div>

               
                <div className={styles.supply}>
                  <span>PRICE: </span>
                  <span className={styles.asupply}>{mintAmount * NFTprice}</span> MATIC
               </div>

                  <button className={styles.btnmint}>MINT</button>


            </div>

         </div>
      </div>


    </>
  )
}

export default Minter