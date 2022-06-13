import React from 'react'
import { images } from '../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers'
import abi from '../assets/abi.json'

const styles = {
   bg: `bg-[#ffffff] px-[18px] pt-[40px] flex justify-center`,
   about1: `font-[corbel]  text-[25px] text-center md:text-[30px] pt-[80px]`,
   green: `font-[corbel] text-[45px] text-[#64B6AC]`,
   grey: `font-[corbel] text-[45px] text-[#323232]`,
   container: `px-3 py-3 flex flex-col w-[360px] md:w-[600px] justify-center bg-[#ebf6ff] shadow-lg  `,
   div1: ` p-2 flex flex-col justify-center text-center space-y-2`,
   div2: ` p-2  align-middle text-center flex flex-col justify-center space-y-2` ,
   image: ` px-6 py-0 `,
   input: `font-[corbel] text-lg bg-[#ffffff] mx-6`,
   metamaskerror: `font-[corbel] text-sm bg-[#ffffff] mx-6 capitalize p-1`,
   btnconnect: `font-[corbel] w-full animate-pulse text-lg bg-[#64B6AC] hover:bg-[#5BBAEB] text-white font-bold p-4  shadow-md`,
   amount: `font-[corbel] text-lg`,
   btnmint: `font-[corbel] text-lg bg-[#64B6AC] hover:bg-[#5BBAEB] text-white font-bold py-4 mx-6 shadow-md`,
   counterbtnp: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`,
   counterbtnn: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`,
   counter: `bg-gray-200 text-gray-800 font-bold py-3 px-4`,
   asupply: `text-[30px] text-[#45c76e]`,
   polygon: `max-w-[130px] mx-auto`,
   modal: `mx-auto`,
   spinner: `mx-auto m-[20px] w-20 h-20 rounded-full animate-spin border-8 border-solid border-blue-300 border-t-transparent`,
   opensea: `max-w-[260px] mx-auto pt-[20px]`,

}


const address = "0xA58E6e03E6584DCcBDbd1Fbf09b8D38122af811a"
const rpcurlprovider =  new ethers.providers.JsonRpcProvider(["https://polygon-rpc.com/"])
const contract =  new ethers.Contract(address, abi, rpcurlprovider) 


const Minter = () => {
   const [mintAmount, setmintAmount] = useState(1)
   const [metamask, setmetamask] = useState(false)
   const [walletconnected, setWalletconnected] = useState()
   const [metamaskprovider, setMetamaskprovider] = useState([])
   const [nftcostwei, setnftcostwei] = useState("0")
   const [nftcosteth, setnftcosteth] = useState("0")
   const [price, setprice] = useState()
   const [totalSupply, setTotalsupply] = useState()
   const [mintingmodal, setmintingmodal] = useState(false)
   
   window.onload = function () {

      async function handleaccountchange() {
         const accounts = await window.ethereum.request({ method: "eth_accounts" });
         const isConnected = !!accounts.length;
         isConnected ? setWalletconnected(true) : setWalletconnected(false) 
      }

      async function handlechainchange() {
         const mmprovider = await new ethers.providers.Web3Provider(window.ethereum)
         setMetamaskprovider(mmprovider)
         console.log("newprovidersetted")
      }

      if (window.ethereum !== "undefined") {
         window.ethereum.on('accountsChanged',() => {handleaccountchange()} );
         setmetamask(true)
      } else {setmetamask(false)}
      
      if (window.ethereum !== "undefined") {
         window.ethereum.on('chainChanged',() => {handlechainchange()} );
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
      const chainIdbg = await window.ethereum.chainId
      console.log("chainIdbg",chainIdbg)
      console.log("metamaskprovider",metamaskprovider)

      if (chainIdbg !== "0x89") {
         window.alert("MetaMask is connect to wrong network! To Mint, Please First Connect your MetaMask to Polygon Mainnet Network (ID:137) before minting")
         // setWalletconnected(false)
      } else {
      const signer = await metamaskprovider.getSigner()  
      const signedcontract = await contract.connect(signer)
      const totalprice = nftcostwei * mintAmount
      const pay = {value: totalprice.toString() }
      const minting = await signedcontract.mint(mintAmount, pay)
      setmintingmodal(true)
      await minting.wait()
      setmintingmodal(false)
      }
   }

   useEffect(() => {
      const rpcurlprovider =  new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/")
      const contract =  new ethers.Contract(address, abi, rpcurlprovider) 

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
         <div className={styles.about1}>
            <span className={styles.green}>COMPRAR </span> <span className={styles.grey}>TOKEN </span> 
         </div>
      <div className={styles.bg}>

         <div className={styles.container}>

            <div className={styles.div1}>
               <img src={images.pl} alt="" className={styles.polygon}></img>


            </div>
            
            {
            !mintingmodal 
            ?
               <div className={styles.div2}>
                  {metamask ?

                     <div className={styles.btndiv} > 
                        { walletconnected ? "" :
                           <button className={styles.btnconnect} onClick={() => {connectWallet()}}>CONECTAR CARTEIRA</button>    
                        }
                     </div>
                  : <div className={styles.metamaskerror}>Metamask Extension Not Detected! For minting, please install it and refresh the page </div>}                           

                  {walletconnected ?  
                  <div className={styles.metamaskerror}>
                        <span> INPUT </span>
                     </div>
                  : "" }
                  
                  {walletconnected ?  
                  <div className={styles.metamaskerror}>
                        <span>OUTPUT </span>
                     </div>
                  : "" }

                  {walletconnected ?    
                     <button className={styles.btnmint} onClick={()=>{setmintingmodal(true)}}>COMPRAR</button>
                  : "" } 
               </div>
             : 
               <div className={styles.modal}>
                  <div className={styles.spinner}> </div>
                  <span className={styles.supply}>TRANSACTION IN PROCESS</span>
               </div> 
            }
         </div>
      </div>

    </>
  )
}

export default Minter