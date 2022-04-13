import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet, // rinkeby: Networks.ethereumTestnet
  mainnet: Networks.polygonMainnet, // rinkeby: Networks.ethereumMainnet
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DevsPunks',
  tokenName: '33 Devs Punks',
  tokenSymbol: 'DEVSP',
  hiddenMetadataUri: 'ipfs://QmSx1h8sZFd96WcF3WafhHbWPSq2B3QsFSc6Wv18tiVnLH/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0xA58E6e03E6584DCcBDbd1Fbf09b8D38122af811a", //rinkeby: "0xaE66938d0eF0bC5CB1D8d96f870A1Ed90E182c16" mumbai: "0xD179976c97Aa152a96311D46CbA0BC611b50a79A"
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
