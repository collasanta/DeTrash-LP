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
   {questionid:'faq01',question:'what are the collection about?', answer:'The 33Devs represent all the devs and creators leading this web3 revolution.  bY Holding one you are allowed to enter the exclusive 33Devs community, meeting other creators and having access to development content and events'},
   {questionid:'faq02', question:'how can i mint?', answer:'this is the official website, you can mint here until the supply is over, after that you can buy one directly from the opensea market'},
   {questionid:'faq04', question:'what is the minting price?', answer:'Free for the first 100 minters, you will only pay the MATIC transaction fee'},
   {questionid:'faq03', question:'what are the benefits of the community?', answer:'A exclusive Discord Server with other developers and 33Devs Holders, with excluvise content dedicated to advance our development skills to the moon, you also will be able to join our presential and online meetups, all around the world'},

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