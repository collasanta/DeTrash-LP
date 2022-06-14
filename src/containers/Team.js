import React from 'react'
import { images } from '../assets'
import TeamCard from '../cards/TeamCard';

const styles = {
   container: `space-y-4 pt-[70px] pb-[30px] flex flex-col justify-center bg-[#ffffff]   `,
   container2: `space-y-4 flex flex-col md:flex-row justify-center bg-[#ffffff] pb-[70px]`,
   cardcontainer: `flex flex-col justify-center bg-[#ffffff] lg:flex-row     `,
   header: `font-[Kollektif] text-[45px] text-center px-[20px]`,
   purple: `text-[#5BBAEB]`,
   socialiconscontainer:``,
}

const teamdata = [
   [{title:"Beatriz Siqueira", description:"Fundadora responsável por decidir e executar o planejamento de desenvolvimento e gestão do nosso time de desenvolvimento", image: images.p2, linkedin:"https://www.linkedin.com/in/beatriz-siqueira-79a8b9147/", twitter:'https://twitter.com/LilSugarPiee', github:'https://github.com/biadebeatriz.com',}],
   [{title:"Philipp Teles", description:"Empreendedor com carreira em startups de crescimento acelerado, criou a DeTrash e o modelo de negócio do RECY para limpar os oceanos.", image: images.p1, linkedin:"https://www.linkedin.com/in/philipptvoh/", twitter:'https://www.twitter.com/telesvon', github:'',}],
   [{title:"Matheus Rocha", description:"Matheus é o COO buscando sempre melhorar os processos, atua no planejamento estratégico e impulsionar as vendas dos cripto ativos", image: images.p3, linkedin:"https://www.linkedin.com/in/matheus-dias-b62b1b52/", twitter:'', github:'',}],
]
const Team = () => {
  return (
     <>
      <div className={styles.container} id="EQUIPE" >
         <div className={styles.header} > A <span className={styles.purple}>EQUIPE</span> </div>
      </div>
      
      <div className={styles.container2}>

         <div className={styles.cardcontainer} >
               {teamdata.map(cardinfo=>(
                  <div>
                     <TeamCard
                     cardinfo={cardinfo[0]}
                     />
                  </div>
               ))}
            </div>
      </div>
    </>
  )
}

export default Team