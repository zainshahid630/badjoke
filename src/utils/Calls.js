import { writeContract } from '@wagmi/core'
import { ICO_Abi, Usdt_Abi } from './tokenAbi';
import { CHAINBASE_API_KEY, Get_TokenBalabce_abi, ICO_Address, Paxium_token, Usdt, web3_custom } from './constants';





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
  
  
  export const GetPriceOfPaxium = (address) => {
    const contract = new web3_custom.eth.Contract(
      ICO_Abi,
       ICO_Address
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .getCurrentPrice()
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }; 


  export const TotalRaisedINUSDT = async (address) => {
    try {
      const balance = await web3_custom.eth.getBalance(address);
      const balanceInETH = web3_custom.utils.fromWei(balance, 'ether');
      console.log('Balance in ETH:', balanceInETH);
  
      // Assuming you have a conversion rate from ETH to USDT (for example, 1 ETH = 1800 USDT)
      const ethToUsdtRate = 1800; // Update with the current rate
      const balanceInUSDT = balanceInETH * ethToUsdtRate;
  
      return balanceInUSDT;
    } catch (error) {
      console.error('Error fetching balance:', error);
      return null;
    }
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

  export const getRemainingTimeForNextPriceChange = (address) => {
    const contract = new web3_custom.eth.Contract(
      ICO_Abi,
       ICO_Address
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .getRemainingTimeForNextPriceChange()
        .call()
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };    

  export const getReferralBonusEarned = (address) => {
    const contract = new web3_custom.eth.Contract(
      ICO_Abi,
       ICO_Address
    );
    return new Promise((resolve, reject) => {
      contract.methods
        .getReferralBonusEarned()
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

  

  export const GetTokenHolders = (networkId, tokenAddr, page = 1, limit = 20) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${networkId}&contract_address=${tokenAddr}&page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'x-api-key': CHAINBASE_API_KEY, // Replace with your API key.
          'accept': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data); // Resolve with the relevant data
      })
      .catch(error => {
        reject(error); // Reject with the error
      });
    });
  };
  