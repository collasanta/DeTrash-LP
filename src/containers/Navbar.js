import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../assets';

const styles = {
   wrapper: `z-[1] shadow-sm fixed  px-8 h-[70px]  w-screen flex justify-between items-center bg-[#ebf6ff] text-black overflow:hidden `,
   logo: `flex w-1/8 items-center justify-start font-['corbel'] text-[2rem] text-[#78818e]  `,
   logospan: `text-[#6e45c7]`,
   menu: `hidden md:flex block `,
   menuitem: `px-4 py-2 m-1 flex items-center text-lg font-['corbel'] text-[1.4rem] cursor-pointer rounded-3xl hover:text-[#64b6ac] text-[#78818e]`,
   sidebaritems: `fixed text-center w-full h-full right-0 top-0  text-[2rem] bg-[#ffffff] font-['corbel'] text-[#78818e]`,
   sidebaritemhover: `hover:text-[#64b6ac]`,
   sidebar: ` visible md:hidden flex  `,
   oplogo: `max-w-[35px] mr-[35px] `,
   oplogo2: `max-w-[35px] mr-[35px] hidden md:flex block  `,
   menubutton: `hover:text-[#64b6ac]`,
   dtlogo: `max-w-[100px] mr-[35px]`,
   
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.wrapper}>
      
       <div className={styles.logo}>
          <img className={styles.dtlogo} src={images.dtlogo}/>
       </div>

       <ul className={styles.menu}>
         {['SOBRE', 'ROADMAP', 'EQUIPE', 'FAQ' ].map((item)=> (
            <li className={styles.menuitem} key={`link-${item}`}>
               <div />
               <a href={`#${item}`}>{item}</a>
            </li>

         ))}
      </ul>
      



      <div className={styles.sidebar}>
      
      <HiMenuAlt4  className={styles.menubutton} size={35} onClick={() => setToggle(true)} />  

         {toggle && (      
            <div className={styles.sidebarbg}
         >  

            <ul className={styles.sidebaritems}>
            <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
               <HiX size={35} color='#64b6ac' onClick={() => setToggle(false)} />       
               {['SOBRE', 'ROADMAP', 'EQUIPE', 'FAQ'].map((item) => (
               <li className={styles.sidebaritemhover} key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                     {item}
                  </a>
               </li>
               ))}
               </motion.div>
            </ul>

            </div>
            
          )}



      </div>

   


       


    </div>
  )
}

export default Navbar