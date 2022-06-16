import React from 'react'
import { images } from '../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers'
import abi from '../assets/VENDOR.json'
import axios from "axios";

const styles = {
  bg: `bg-[#ebf6ff] rounded-full shadow-l mx-auto max-w-[500px] min-w-[375px] shadow-lg px-[10px] pt-[20px] pb-[10px] flex justify-center`,
  about1: `font-[Kollektif]  text-[35px] text-center md:text-[40px] pt-[100px] pb-[20px]`,
  green: `font-[Kollektif]  text-[#013a81]`,
  grey: `font-[Kollektif] `,
  container: `flex flex-col w-[360px] md:w-[600px] justify-center  `,
  div1: `pb-3`,
  div2: ` mx-auto  w-[360px] text-center flex flex-col space-y-2 `,
  input: `font-[Kollektif] text-[26px] mx-5 flex justify-between  h-[60px] items-center  bg-[#ffffff] rounded-full px-[30px] border-2 border-blue-100  `,
  outputbox: `font-[Kollektif] ml-[10px] text-[28px] max-w-[165px] overflow-hidden truncate  text-[#5BBAEB]`,
  inputbox: `font-[Kollektif] ml-[10px] max-w-[165px] overflow-hidden text-[28px]`,
  inputfield: `focus:outline-0 w-[165px] text-[#64B6AC] truncate   `,
  inputdesc: `text-[grey]`,
  btnconnect: `font-[Kollektif] animate-pulse text-lg rounded-full bg-[#64b6a6] hover:bg-[#5BBAEB] text-white font-bold p-4 px-[60px]  shadow-md`,
  btnmint: `animate-pulse font-[Kollektif] text-lg bg-[#64B6AC] hover:bg-[#5BBAEB] text-white rounded-full mx-7 font-bold py-4  shadow-md`,
  asupply: ` text-[22px] text-center text-[#45c76e]`,
  polygon: `max-w-[200px] mx-auto`,
  modal: `mx-auto`,
  spinner: `mx-auto m-[20px] w-20 h-20 rounded-full animate-spin border-8 border-solid border-[#5BBAEB] border-t-transparent`,
  price: ` text-center mx-6 font-[Kollektif] text-[18px] pt-[15px] pb-[15px] text-[#7d818c]`,
}

const address = "0x6FF99dD8E23BbfB9340Aa6eE8878917229505537"
const rpcurlprovider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/celo")
const contract = new ethers.Contract(address, abi, rpcurlprovider)

const Minter = () => {
  const [buyAmount, setBuyAmount] = useState(1)
  const [metamask, setmetamask] = useState(false)
  const [walletconnected, setWalletconnected] = useState(false)
  const [metamaskprovider, setMetamaskprovider] = useState([])
  const [mintingmodal, setmintingmodal] = useState(false)
  const [dataloaded, setDataloaded] = useState(false)
  const [tokensperCelo, setTokenspercelo] = useState()
  const [celoPerTokens, setceloPerTokens] = useState()
  const [pageURL, setPageURL] = useState(0);

  useEffect(() => {
    setPageURL(window.location.href.replace(/^https?:\/\//, ''));
  }, []);

  useEffect(() => {
    const rpcurlprovider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/celo")
    const contract = new ethers.Contract(address, abi, rpcurlprovider)
    async function loaddata() {
      const tokenspercello = await contract.TokensperCelo()
      setTokenspercelo(ethers.utils.formatEther(tokenspercello.toString()))
      const celopertokenss = await contract.PricecRecy()
      setceloPerTokens(ethers.utils.formatEther(celopertokenss.toString()))
      setDataloaded(true)
    }
    loaddata()
  }, [])

  window.onload = function () {
    async function handleaccountchange() {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const isConnected = !!accounts.length;
      isConnected ? setWalletconnected(true) : setWalletconnected(false)
    }

    async function handlechainchange() {
      const mmprovider = await new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(mmprovider)
      // console.log("newprovidersetted")
    }

    if (window.ethereum !== "undefined") {
      window.ethereum.on('accountsChanged', () => { handleaccountchange() });
      setmetamask(true)
    } else { setmetamask(false) }

    if (window.ethereum !== "undefined") {
      window.ethereum.on('chainChanged', () => { handlechainchange() });
      setmetamask(true)
    } else { setmetamask(false) }
  }

  const networks = {
    celo: {
      chainId: `0x${Number(42220).toString(16)}`,
      chainName: "Celo Mainnet",
      nativeCurrency: {
        name: "CELO",
        symbol: "CELO",
        decimals: 18
      },
      rpcUrls: ["https://forno.celo.org"],
      blockExplorerUrls: ["https://explorer.celo.org"]
    }
  }

  const deeplinkMetamask = () => {
    window.location.href = `https://metamask.app.link/dapp/${pageURL}`
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

  const handleInputChange = async (event) => {
    setBuyAmount(event.target.value)
  }

  async function connectWallet() {
    const chainIdbg = await window.ethereum.chainId
    if (!metamask) {
      deeplinkMetamask()
    }
    if (chainIdbg !== networks.celo.chainId) {
      await changeNetwork()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(provider)
      await provider.send("eth_requestAccounts", [])
      setWalletconnected(true)
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      setMetamaskprovider(provider)
      await provider.send("eth_requestAccounts", [])
      setWalletconnected(true)
    }
  }


  async function gasPriceEth() {
    try {
      const { data: { result: gasPrice } } = await axios.post('https://eth-mainnet.alchemyapi.io/v2/cLBYf3MjB7MAcWCsT_6OFc19nnoTEZMx', {
        jsonrpc: '2.0',
        method: 'eth_gasPrice',
        params: [],
        id: +new Date(),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      return gasPrice;
    } catch (err) {
      console.error("Failed to retrieve gas price", err);
    }
  }

  async function buy() {
    const chainIdbg = await window.ethereum.chainId
    if (chainIdbg !== networks.celo.chainId) {
      await changeNetwork()
    } else {
      const signer = await metamaskprovider.getSigner()
      const signedcontract = await contract.connect(signer)
      const gasPrice = await gasPriceEth();
      const buytx = await signedcontract.BuyTokens({
        value: ethers.utils.parseEther(buyAmount),
        gasLimit: '70000',
        gasPrice: gasPrice
      });
      setmintingmodal(true)
      await buytx.wait()
      setmintingmodal(false)
    }
  }

  return (
    <>
      <div className={styles.about1}>
        <span className={styles.green}>COMPRAR </span> <span className={styles.grey}>TOKEN </span>
      </div>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.div1}>
            <img src={images.celodt} alt="" className={styles.polygon}></img>
          </div>
          {!mintingmodal ?
            <div className={styles.div2}>

              {dataloaded ?
                <div className={styles.btndiv} >
                  {walletconnected ? "" :
                    <button className={styles.btnconnect} onClick={() => { connectWallet() }}>CONECTAR CARTEIRA</button>
                  }
                </div>
                :
                <div className={styles.spinner}> </div>
              }

              {walletconnected ?
                <div className={styles.input}>
                  <div className={styles.inputbox}>
                    <input placeholder='1 TOKEN' type="number" className={styles.inputfield} onChange={handleInputChange}></input>
                  </div>
                  <div className={styles.inputdesc}>
                    CELO
                  </div>
                </div>
                :
                ""
              }

              {walletconnected ?
                <div className={styles.input}>
                  <div className={styles.outputbox}>
                    {(Number(tokensperCelo) * buyAmount).toFixed(2)}
                  </div>
                  <div className={styles.inputdesc}>
                    cRECY
                  </div>
                </div>
                :
                ""
              }

              {walletconnected ?
                <button className={styles.btnmint} onClick={() => { buy() }}>COMPRAR</button>
                :
                ""
              }
            </div>

            :

            <div className={styles.modal}>
              <div className={styles.spinner}> </div>
              <span className={styles.price}>TRANSAÇÃO EM PROCESSO...</span>
            </div>
          }

          {dataloaded ?
            <div className={styles.price}>
              <span className={styles.asupply}>1.0</span> cRECY = &nbsp;
              <span className={styles.asupply}>{celoPerTokens}</span> CELO
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