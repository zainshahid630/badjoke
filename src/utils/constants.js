import Web3 from "web3";

export const faqs = [
    {
      q: "What is this software list?",
      a: "Our list is a curated directory of self-hosted software solutions, offering you control over your data and privacy.",
    },
    {
      q: "How can this list benefit me?",
      a: "Our list helps you find software that you can host on your own servers, giving you control and customization to fit your needs.",
    },
    {
      q: "Are these software solutions free?",
      a: "Our directory includes both free and proprietary software options, each with its own benefits and limitations.",
    },
    {
      q: "How can I submit my software to the list?",
      a: "Visit our submission page, fill out the form with your software details, and our team will review it for inclusion.",
    },
    {
      q: "Can I find software for specific needs?",
      a: "Yes, our list is categorized to help you find software solutions tailored to your specific needs.",
    },
  ];


  export const web3_custom = new Web3(
    new Web3.providers.HttpProvider(
      "https://bsc-dataseed1.bnbchain.org/"
    )
  );



 export const   Paxium_token=  "0x55b4331de5F63Be355E2039CBB11D12d0Fcff7F1"
 export const   Usdt =  "0x55d398326f99059fF775485246999027B3197955"
 export const   ICO_Address =  "0x9554E202DB2610Dc8AE6daA7581E694EF2FA2E6d"

 export const    Telegram_link  = 'https://t.me/PaxiumPresale'
 export const    twitter_link  = 'https://x.com/IcoTokenPresale'

 export const CHAINBASE_API_KEY = "2nQ6IPp753GxadtIlXrpFJMVMJw"

 export const defaultChain = 56




 export const Get_TokenBalabce_abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];