import React from 'react'

const styles = {
   supercontainer: `flex flex-col `,
   container: `min-w-[320px] mx-4 border-t-[20px] border-[#edf2f8] md:w-[400px] flex flex-col justify-start bg-[#ffffff]`,
   questiondiv: `bg-[#fffff]  p-2 flex flex-row justify-between x-[20px]`,
   question: ` cursor-pointer bg-[#ffffff] flex flex-row justify-between mx-[20px] uppercase text-[13px] font-[minitel]`,
   icon: `mx-3 cursor-pointer `,
   hidden: `hidden h-[0px]`,
   answerdiv: `p-3 py-3 bg-[#fef4f5] mx-4 text-[13px] text-[#79818d] md:w-[400px] uppercase font-[minitel]`,
}

const FAQCard = ({question, setactivefaq, activefaq}) => {
   console.log(question.questionid)
  return (
   <>
   <div className={styles.supercontainer}>

   
      <div className={styles.container}>

         <div  className={styles.questiondiv} >

            <div onClick={()=>{setactivefaq(question.questionid)}} className={styles.question}>
               {question.question}
            </div>

            {activefaq === question.questionid ?
               <div onClick={()=>{setactivefaq("")}} className={styles.icon}>X </div>   
               : 
               <div onClick={()=>{setactivefaq(question.questionid)}} className={styles.icon}>V</div>            
            }

         </div>
      </div>

      <div className={activefaq === question.questionid ? styles.answerdiv : styles.hidden }>
               
         {question.answer}

      </div>

   </div>
   </>
  )
}

export default FAQCard