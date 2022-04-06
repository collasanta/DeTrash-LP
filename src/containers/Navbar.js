import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const styles = {
   wrapper: `z-[1] shadow-sm fixed  px-8 h-[70px]  w-full flex justify-between items-center bg-[#f2f5fa] text-black `,
   logo: `flex w-1/8 items-center justify-start font-['pix'] text-[2rem] text-[#78818e]  `,
   logospan: `text-[#6e45c7]`,
   menu: `hidden md:flex block `,
   menuitem: `px-4 py-2 m-1 flex items-center text-lg font-['pix'] text-[1.4rem] cursor-pointer rounded-3xl hover:text-[#6e45c7] text-[#78818e]`,
   sidebaritems: `fixed text-center w-full h-full right-0 top-0  text-[2rem] bg-[#ffffff] font-['pix'] text-[#78818e]`,
   sidebaritemhover: `hover:text-[#6e45c7]`,
   sidebar: `hover:text-[#6e45c7] visible md:hidden  `,
   sidebarbg: ``,
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.wrapper}>
       
       <div className={styles.logo}>
            <span className={styles.logospan}>33</span>DEVS
       </div>

       <ul className={styles.menu}>
         {['ABOUT','TRAITS', 'ROADMAP', 'TEAM', 'FAQ' ].map((item)=> (
            <li className={styles.menuitem} key={`link-${item}`}>
               <div />
               <a href={`#${item}`}>{item}</a>
            </li>

         ))}
      </ul>

      
      

      <div className={styles.sidebar}>

      <HiMenuAlt4  size={35} onClick={() => setToggle(true)} />  

         {toggle && (      
            <div className={styles.sidebarbg}
         >  

            <ul className={styles.sidebaritems}>
            <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
               <HiX size={35} color='#6e45c7' onClick={() => setToggle(false)} />       
               {['ABOUT','TRAITS', 'ROADMAP', 'TEAM', 'FAQ'].map((item) => (
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