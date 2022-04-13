import React from 'react'
import { images } from '../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers'
import abi from '../assets/abi.json'

const styles = {
   bg: `bg-[#ffffff] p-10 flex justify-center`,
   container: `px-3 py-3 flex flex-col sm:flex-row justify-center bg-[#f2f5fa] md:max-w-2xl shadow-lg  `,
   div1: ` p-2 sm:w-1/2 flex flex-col justify-center text-center space-y-2`,
   div2: ` p-2 sm:w-1/2 align-middle text-center flex flex-col justify-center space-y-2` ,
   image: ` px-6 py-0 `,
   supply: `font-[pix] text-lg bg-[#ffffff] mx-6`,
   btnconnect: `font-[pix] w-full animate-pulse text-lg bg-[#6e45c7] hover:bg-[#45c76e] text-white font-bold p-4  shadow-md`,
   amount: `font-[pix] text-lg`,
   btnmint: `font-[pix] text-lg bg-[#6e45c7] hover:bg-[#45c76e] text-white font-bold py-4 px-6 shadow-md`,
   counterbtnp: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`,
   counterbtnn: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`,
   counter: `bg-gray-200 text-gray-800 font-bold py-3 px-4`,
   asupply: `text-[30px] text-[#45c76e]`,
   polygon: `max-w-[130px] mx-auto`,
   spinner: `w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent`,
   opensea: `max-w-[260px] mx-auto pt-[20px]`,

}


const address = "0xA58E6e03E6584DCcBDbd1Fbf09b8D38122af811a"
const provider =  new ethers.providers.JsonRpcProvider(["https://polygon-rpc.com/"])
const contract =  new ethers.Contract(address, abi, provider) 


const Minter = () => {
   const [mintAmount, setmintAmount] = useState(1)
   const [metamask, setmetamask] = useState(false)
   const [walletconnected, setWalletconnected] = useState(false)
   const [metamaskprovider, setMetamaskprovider] = useState([])
   const [nftcostwei, setnftcostwei] = useState("0")
   const [nftcosteth, setnftcosteth] = useState("0")
   const [price, setprice] = useState()
   const [totalSupply, setTotalsupply] = useState()
   const [mintingmodal, setmintingmodal] = useState(false)
   
   window.onload = function () {

      async function handlechange() {
         const accounts = await window.ethereum.request({ method: "eth_accounts" });
         console.log("accounts",accounts)
         const isConnected = !!accounts.length;
         isConnected ? setWalletconnected(true) : setWalletconnected(false) 
         console.log("isConnected",isConnected)
      }

      if (window.ethereum !== "undefined") {
         window.ethereum.on('accountsChanged',() => {handlechange()} );
         setmetamask(true)
      } else {setmetamask(false)}

   }


   async function connectWallet () {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(provider)
      await provider.send("eth_requestAccounts",[])
      setWalletconnected(true)   
   }

   async function mint() {
      const signer = await metamaskprovider.getSigner()  
      const signedcontract = await contract.connect(signer)
      const totalprice = nftcostwei * mintAmount
      const pay = {value: totalprice.toString() }
      const minting = await signedcontract.mint(mintAmount, pay)
      setmintingmodal(true)
      await minting.wait()
      setmintingmodal(false)
   }

   useEffect(() => {
      const provider =  new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/")
      const contract =  new ethers.Contract(address, abi, provider) 

      async function loaddata(){
         const nftcostbg = await contract.cost()
         const nftcostwei =  await nftcostbg.toString()
         setnftcostwei (nftcostwei)
         const nftcostethx = await nftcostwei / 1000000000000000000
         const nftcosteth = await nftcostethx.toFixed(4)
         setnftcosteth (nftcosteth)
         const totalSupplybn = await contract.totalSupply()
         const totalSupply = await totalSupplybn.toString()
         setTotalsupply (totalSupply)
      } 
   
      loaddata()

   }, [])
   
   useEffect(() => {
      const pricecount = mintAmount * nftcosteth
      const priceformatted = pricecount.toLocaleString("en-US", { maximumFractionDigits: 4, minimumFractionDigits: 1 })
      setprice(priceformatted)
    }, [mintAmount, nftcosteth])


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
                  <span className={styles.asupply}>{totalSupply}</span>/10.000
               </div>

            </div>
            
            {
            !mintingmodal 
            ?
               <div className={styles.div2}>
                  <img src={images.pl} alt="" className={styles.polygon}></img>
                  {metamask ?

                     <div className={styles.btndiv} > 
                        { walletconnected ? "" :
                           <button className={styles.btnconnect} onClick={() => {connectWallet()}}>CONNECT WALLET</button>    
                        }
                        { walletconnected ? "" :
                           <a href="https://opensea.io/collection/33-devs-punks" target="_blank"><img className={styles.opensea}src={images.op}></img></a>
                        }
                     </div>
                  : "Metamask Extension Not Detected! For minting, please install it and refresh the page."}               
                  {console.log("walletconnected",walletconnected)}               
                  {walletconnected ?                
                     <div className={styles.amount}>
                        <div>Amount:</div>
                        <button className={styles.counterbtnp} onClick={() => {mintAmount > 1 ? setmintAmount(mintAmount-1): setmintAmount(mintAmount)}}>-</button>
                        <span className={styles.counter}>{mintAmount}</span>
                        <button className={styles.counterbtnn} onClick={() => {mintAmount < 5 ? setmintAmount(mintAmount+1): setmintAmount(mintAmount)}}>+</button>
                     </div>  
                  : "" }

                  {walletconnected ?  
                  <div className={styles.supply}>
                        <span>PRICE: </span>
                        <span className={styles.asupply}>{mintAmount * nftcosteth == 0 ? "FREE" : price }</span> {mintAmount * nftcosteth == 0 ? "to mint" : "MATIC" }
                     </div>
                  : "" }
                  
                  {walletconnected ?    
                     <button className={styles.btnmint} onClick={()=>{mint()}}>MINT</button>
                  : "" } 
               </div>
             : 
               <div class={styles.spinner}> </div> 
            }
         </div>
      </div>

    </>
  )
}

export default Minter