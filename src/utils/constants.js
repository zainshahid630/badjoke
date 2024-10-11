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
      "https://data-seed-prebsc-1-s1.bnbchain.org:8545/"
    )
  );



 export const   Paxium_token=  "0xF41A19d1d8c669a387388441927316A5E16dcb34"
 export const   Usdt =  "0x2349403DE449b34270fb53779509dF309fca37aF"
 export const   ICO_Address =  "0x37f8ef6904D3f7EB81800A2F25ac1bF6e7bd0F30"

 export const defaultChain = 97




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