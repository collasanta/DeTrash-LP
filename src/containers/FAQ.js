import React, {useState} from 'react'
import FAQCard from '../cards/FAQCard';

const styles = {
   container: `space-y-4 py-[50px] flex flex-col justify-center bg-[#edf2f8]`,
   header: `font-[minitel] text-[25px] text-center px-[20px] leading-[50px] md:text-[30px]`,
   cardcontainer: `py-[25px] mx-auto md:max-w-[1800px] md:flex flex-row flex-wrap   max-w-screen justify-center `,
   purple: `text-[#6e45c7]`,
   faqcontainer: `mx-auto flex flex-col flex-wrap md:flex-row md:justify-center  justify-start`,
}

const faqdata = [
   {questionid:'faq01',question:'quem nasceu primeiro meu deus?', answer:'o ovo ou a galinha? a galinha!'},
   {questionid:'faq02', question:'quem nasceu primeiro papaizinho?', answer:'o ovo ou a galinha? a galinha!'},
   {questionid:'faq03', question:'quem nasceu primeiro papaizinho?', answer:'o ovo ou a galinha? a galinha!'},
   {questionid:'faq04', question:'quem nasceu primeiro papaizinho?', answer:'o ovo ou a galinha? a galinha!'},

]



const FAQ = () => {
   const [activefaq, setactivefaq] = useState(faqdata[0].questionid);

  return (
     <>

      <div className={styles.container}>
         <div className={styles.header}> F.A.Q </div>

         <div className={styles.faqcontainer}>

            {faqdata.map(question => (
                  <FAQCard
                  question={question}
                  setactivefaq={setactivefaq}
                  activefaq={activefaq}
                  />
            ))}

         
         </div>
      </div>


     </>
  )
}

export default FAQ