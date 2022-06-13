import React from 'react'
import { images } from '../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers'
import abi from '../assets/VENDOR.json'

const styles = {
   bg: `bg-[#ffffff] px-[18px] pt-[40px] flex justify-center`,
   about1: `font-[corbel]  text-[25px] text-center md:text-[30px] pt-[100px]`,
   green: `font-[corbel] text-[45px] text-[#64B6AC]`,
   grey: `font-[corbel] text-[45px] text-[#323232]`,
   container: ` py-3 flex flex-col w-[360px] md:w-[600px] justify-center bg-[#ebf6ff] rounded-full shadow-lg  `,
   div1: `py-3`,
   div2: ` mx-auto  w-[360px] text-center flex flex-col space-y-2 ` ,
   input: `font-[corbel] text-[22px] flex justify-between  h-[40px]  bg-[#ffffff] rounded-full px-[10px] border-2 border-grey-300  mx-6`,
   outputbox: `font-[corbel] ml-[10px] text-[22px] text-[#5BBAEB]`,
   inputbox: `font-[corbel] ml-[10px] text-[22px]`,
   metamaskerror: `font-[corbel] text-sm bg-[#ffffff] mx-6 capitalize p-1`,
   btnconnect: `font-[corbel] animate-pulse text-lg rounded-full bg-[#64B6AC] hover:bg-[#5BBAEB] text-white font-bold p-4 px-[60px]  shadow-md`,
   amount: `font-[corbel] text-lg`,
   btnmint: `font-[corbel] text-lg bg-[#64B6AC] hover:bg-[#5BBAEB] text-white rounded-full font-bold py-4 mx-6 shadow-md`,
   counterbtnp: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`,
   counterbtnn: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`,
   counter: `bg-gray-200 text-gray-800 font-bold py-3 px-4`,
   asupply: ` text-[30px] text-center text-[#45c76e]`,
   polygon: `max-w-[130px] mx-auto`,
   modal: `mx-auto`,
   spinner: `mx-auto m-[20px] w-20 h-20 rounded-full animate-spin border-8 border-solid border-blue-300 border-t-transparent`,
   opensea: `max-w-[260px] mx-auto pt-[20px]`,
   price: ` text-center mx-6 font-[corbel] text-[22px]`,

}


const address = "0x6FF99dD8E23BbfB9340Aa6eE8878917229505537"
const rpcurlprovider =  new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/celo")
const contract =  new ethers.Contract(address, abi, rpcurlprovider) 


const Minter = () => {
   const [buyAmount, setBuyAmount] = useState(1)
   const [metamask, setmetamask] = useState(false)
   const [walletconnected, setWalletconnected] = useState(false)
   const [metamaskprovider, setMetamaskprovider] = useState([])
   const [nftcostwei, setnftcostwei] = useState("0")
   const [nftcosteth, setnftcosteth] = useState("0")
   const [price, setprice] = useState()
   const [totalSold, setTotalsold] = useState()
   const [mintingmodal, setmintingmodal] = useState(false)
   const [dataloaded, setDataloaded] = useState(false)
  //  const [chainIdbg, setChainidbg] = useState()
   
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

   const networks = {
    celo: {
      chainId: `0x${Number(42220).toString(16)}`,
      chainName: "Celo Mainnet",
      nativeCurrency :{
        name:"CELO",
        symbol:"CELO",
        decimals:18 
      },
        rpcUrls: ["https://forno.celo.org"],
        blockExplorerUrls: ["https://explorer.celo.org"]
    }
   }

   const changeNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks.celo
        }
      ]
    })
   }

   const  handleInputChange = async (event) => {
      setBuyAmount(event.target.value)
      console.log("buyamount", buyAmount)
   }

   async function connectWallet () {
    const chainIdbg = await window.ethereum.chainId
    console.log("window.ethereum chainIdbg connectwallet",chainIdbg)
    console.log("metamaskprovider connectwallet",metamaskprovider)
    console.log("networks.celo.chainId connectwallet",networks.celo.chainId)

    if (chainIdbg !== networks.celo.chainId) {
      await changeNetwork()
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setMetamaskprovider(provider)
        await provider.send("eth_requestAccounts",[])
        setWalletconnected(true)
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(provider)
      await provider.send("eth_requestAccounts",[])
      setWalletconnected(true)

         

    }
 
   }

   async function buy() {
    const chainIdbg = await window.ethereum.chainId
      console.log("buy chainIdbg",chainIdbg)
      console.log("buy metamaskprovider",metamaskprovider)

      if (chainIdbg !== networks.celo.chainId) {
        await changeNetwork()
      } else {
      const signer = await metamaskprovider.getSigner()  
      const signedcontract = await contract.connect(signer)
      const pay = {value: (ethers.utils.parseEther(buyAmount.toString())).toString()}
      console.log("pay", pay) 
      const buytx = await signedcontract.BuyTokens(pay)
      setmintingmodal(true)
      await buytx.wait()
      setmintingmodal(false)
      }
   }

   useEffect(() => {
      const rpcurlprovider =  new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/celo")
      const contract =  new ethers.Contract(address, abi, rpcurlprovider) 
      async function loaddata(){
         const nftcostbg = await contract.TokensperCelo()
         const nftcostwei =  await nftcostbg.toString()
         setnftcostwei (nftcostwei)
         const nftcostethx = await nftcostwei / 1000000000000000000
         const nftcosteth = await nftcostethx.toFixed(4)
         setnftcosteth (nftcosteth)
         setDataloaded(true)
      } 
      loaddata()
   }, [])
   

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
                  {metamask & dataloaded ?

                     <div className={styles.btndiv} > 
                        { walletconnected ? "" :
                           <button className={styles.btnconnect} onClick={() => {connectWallet()}}>CONECTAR CARTEIRA</button>    
                        }
                     </div>
                  : <div className={styles.spinner}> </div> }                           

                  {walletconnected ?  
                    <div className={styles.input}>
                      <div className={styles.inputbox}>
                        <input placeholder='1 TOKEN' onChange={handleInputChange}></input>
                      </div>
                      <div className={styles.inputdesc}>
                        CELO
                      </div>
                          
                    </div>
                  : "" }
                  
                  {walletconnected ?  
                  
                    <div className={styles.input}>
                      <div className={styles.outputbox}>
                      {(buyAmount * 1/nftcosteth).toFixed(4)}
                      </div>
                      <div className={styles.inputdesc}>
                        RECY
                      </div>
                     
                    </div>
                  : "" }

                  {walletconnected ?    
                     <button className={styles.btnmint} onClick={()=>{buy()}}>COMPRAR</button>
                  : "" } 
               </div>
             : 
               <div className={styles.modal}>
                  <div className={styles.spinner}> </div>
                  <span className={styles.supply}>TRANSACTION IN PROCESS</span>
               </div> 
            }

            { dataloaded ? 
              <div className={styles.price}>
                1 Token RECY = 
                <span className={styles.asupply}>{(1/nftcosteth).toFixed(4)}</span> Celo
              </div> 
            :
            ""
            }


         </div>
         
      </div>

    </>
  )
}

export default Minter