import { writeContract } from '@wagmi/core'
import { ICO_Abi, Usdt_Abi } from './tokenAbi';
import { Get_TokenBalabce_abi, ICO_Address, Paxium_token, Usdt, web3_custom } from './constants';





export const GetTotalSlots = () => {
    const contract = new web3_custom.eth.Contract(
      ICO_Abi,
      ICO_Address
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .airdropSlots()
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };





  export const GetBalanceOfPaxium = (address) => {
    const contract = new web3_custom.eth.Contract(
      Get_TokenBalabce_abi,
       Paxium_token
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .balanceOf(address)
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };  


  export const GetBalanceOfUSDT = (address) => {
    const contract = new web3_custom.eth.Contract(
      Get_TokenBalabce_abi,
       Usdt
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .balanceOf(address)
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };    
 
export const ClaimerRewardHistory = (address) => {
    const contract = new web3_custom.eth.Contract(
      ICO_Abi,
      ICO_Address
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .claimerRewardHistory(address)
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }; 



  



export const ClaimTokenAirDrop = async (amount) => {

    try {
      await writeContract({
        address: ICO_Address,
        abi: ICO_Abi,
        functionName: "claimAirdrop",
        args: [],
      });
      return true;
    } catch (error) {
      console.error("Approval error:", error);
    }
  
  };



  export const BuyTokens = async (amount,referral ) => {

    try {
      await writeContract({
        address: ICO_Address,
        abi: ICO_Abi,
        functionName: "buyTokens",
        args: [amount ,referral ],
      });
      return true;
    } catch (error) {
      console.error("Approval error:", error);
    }
  
  };  

  export const buyTokensWithoutReferral = async (amount ) => {

    try {
      await writeContract({
        address: ICO_Address,
        abi: ICO_Abi,
        functionName: "buyTokensWithoutReferral",
        args: [amount  ],
      });
      return true;
    } catch (error) {
      console.error("Approval error:", error);
    }
  
  };  

  


export const Token_approvel = async (amount) => {

    try {
    const data =   await writeContract({
        address: Usdt,
        abi: Usdt_Abi,
        functionName: "approve",
        args: [ICO_Address, amount],
      });
    
      return true
    } catch (error) {
      console.error("Approval error:", error);
    }
  
  
  
  };

  