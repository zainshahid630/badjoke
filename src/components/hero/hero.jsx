import React, { useState, useEffect } from "react";
import bgimage from "../../assets/ggif.gif";
import usdtImage from "../../assets/usdt.png";
import bjImage from "../../assets/Logotoken.png";
import "./hero.css";
import { FaClipboard, FaCopy } from "react-icons/fa6";
import twitter from '../../assets/twitter.png';
import discord from '../../assets/dics.png';
import telegram from '../../assets/teleg.png';
import instagram from '../../assets/insta.png';
import { useAccount } from "wagmi";
import { PulseLoader } from "react-spinners";
import { BuyTokens, buyTokensWithoutReferral, ClaimerRewardHistory, ClaimTokenAirDrop, GetBalanceOfPaxium, GetBalanceOfUSDT, GetPriceOfPaxium, getRemainingTimeForNextPriceChange, GetTokenHolders, GetTotalSlots, Token_approvel, TotalRaisedINUSDT } from "../../utils/Calls";
import { Notifications } from "../Notifications";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ICO_Address, Paxium_token, Telegram_link, twitter_link } from "../../utils/constants";
import MyComponent from "./unixTime";

const FundingHero = () => {

  const location = useParams()

  const [balanceOfUsdt, setbalanceOfUsdt] = useState()










  const { address, isConnecting, isDisconnected, connector } = useAccount();
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 9,
  //   hours: 4,
  //   minutes: 8,
  //   seconds: 47,
  // });
  const [hasRefreshed, setHasRefreshed] = useState(false);


  // const [hasRefreshed, setHasRefreshed] = useState(false);

  useEffect(() => {
    // Check if the wallet is connected and refresh has not yet occurred
    if (address && connector && !hasRefreshed) {
      // Perform your refresh action here (e.g., refetch data or reset state)
      refreshData();  // Custom function to refresh data or state
      setHasRefreshed(true);  // Mark as refreshed to prevent future triggers
    }
  }, [address, connector, hasRefreshed]);

  // Example custom function to refresh data
  const refreshData = () => {
    GetBalanceOfPaxium(address).then((value) => {
      setbalanceOfPaxium(value / 10 ** 18)


    }).catch(() => {

    })
    GetBalanceOfUSDT(address).then((balanceOfUsdt) => {
      console.log('balanceOfUsdt', balanceOfUsdt / 10 ** 18)
      setbalanceOfUsdt(balanceOfUsdt / 10 ** 18)



    }).catch(() => {

    })
    if (location.refAddress) {
      const value = location.refAddress;
      const regex = /(0x[a-fA-F0-9]{40})/; // Regular expression for Ethereum address
      const match = value.match(regex); // Match the address
      if (match) {
        setRefAddress(match[0]); // Set the address if found
      } else {
        setRefAddress(''); // Reset if no valid address is found
      }
    }
    // setRefAddress(location.refAddress)

    GetBalanceOfPaxium(address).then((value) => {
      setbalanceOfPaxium(value / 10 ** 18)


    }).catch(() => {

    })
    ClaimerRewardHistory(address).then((his) => {
      console.log('ClaimerRewardHistory', his)
      setclaimHistory(his)
    }).catch(() => {

    })
    GetTotalSlots().then((x) => {
      console.log('setTotalSlots', x)
      setTotalSlots(x)
    }).catch((e) => {
      console.log('setTotalSlots eror', e)
    })
    // Call any API or logic to refresh the relevant data without reloading the page
    console.log('Data refreshed after successful wallet connection');


  };




  const [claimLoader, setclaimLoader] = useState(false)
  const [usdtAmount, setUsdtAmount] = useState("");
  const [bjAmount, setBjAmount] = useState("");
  const [AmountForBuy, setAmountForBuy] = useState()
  const [getCurrentPrice, setCurrentPrice] = useState()
  const bjRate = 0.000294;
  const remainingBJ = 5000;
  const TotalBJ = 100000;
  const percentage = (remainingBJ / TotalBJ) * 100;
  const formattedPercentage = percentage.toFixed(2);
  const [claimHistory, setclaimHistory] = useState()
  const [RefAddress, setRefAddress] = useState()
  const [unixTIme, setunixTIme] = useState()

  const [TotalSlots, setTotalSlots] = useState()
  const [balanceOfPaxium, setbalanceOfPaxium] = useState()
  const [TotalRaisedinusdt, settotalRaisedINUSDT] = useState()
  const [TotalHolders, SetTotalHolders] = useState()


  const checkBalanceAndReload = (address) => {
    setTimeout(() => {
      GetBalanceOfPaxium(address)
        .then((value) => {
          const balanceOfPaxium = value / 10 ** 18;
          if (balanceOfPaxium > 0) {
            Notifications('Token Claimed Successfully')
            window.location.reload(); // Reload the website
          }
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
        });
    }, 2000); // Wait for 2 seconds before calling the function
  };

  useState(() => {

    getRemainingTimeForNextPriceChange().then((remaining) => {
      console.log(remaining, 'remaining')
      setunixTIme(parseInt(remaining))
    }).catch(() => {

    })
    GetTokenHolders(56, Paxium_token).then((test) => {
      console.log('test', test.count)
      SetTotalHolders(test.count)
    }).catch(() => {

    })
    GetBalanceOfUSDT(ICO_Address).then((balanceOfUsdt) => {
      settotalRaisedINUSDT((balanceOfUsdt / 10 ** 18) + 150.87)

    }).catch(() => {

    })
    GetPriceOfPaxium().then((price) => {
      console.log(price, 'setCurrentPrice')
      setCurrentPrice(price / 10 ** 18)

    }).catch(() => {

    })
    GetBalanceOfUSDT(address).then((balanceOfUsdt) => {
      console.log('balanceOfUsdt', balanceOfUsdt / 10 ** 18)
      setbalanceOfUsdt(balanceOfUsdt / 10 ** 18)



    }).catch(() => {

    })
    setRefAddress(location.refAddress)

    GetBalanceOfPaxium(address).then((value) => {
      setbalanceOfPaxium(value / 10 ** 18)


    }).catch(() => {

    })
    ClaimerRewardHistory(address).then((his) => {
      console.log('ClaimerRewardHistory', his)
      setclaimHistory(his)
    }).catch(() => {

    })


  }, [address, location, isConnecting])

  useState(() => {
    GetBalanceOfPaxium(address).then((value) => {
      setbalanceOfPaxium(value / 10 ** 18)


    }).catch(() => {

    })

    GetTotalSlots().then((x) => {
      console.log('setTotalSlots', x)
      setTotalSlots(x)
    }).catch((e) => {
      console.log('setTotalSlots eror', e)
    })

  }, [address, isConnecting])

  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     const { days, hours, minutes, seconds } = timeLeft;

  //     if (seconds > 0) {
  //       setTimeLeft((prevState) => ({
  //         ...prevState,
  //         seconds: prevState.seconds - 1,
  //       }));
  //     } else if (minutes > 0) {
  //       setTimeLeft((prevState) => ({
  //         ...prevState,
  //         minutes: prevState.minutes - 1,
  //         seconds: 59,
  //       }));
  //     } else if (hours > 0) {
  //       setTimeLeft((prevState) => ({
  //         ...prevState,
  //         hours: prevState.hours - 1,
  //         minutes: 59,
  //         seconds: 59,
  //       }));
  //     } else if (days > 0) {
  //       setTimeLeft((prevState) => ({
  //         ...prevState,
  //         days: prevState.days - 1,
  //         hours: 23,
  //         minutes: 59,
  //         seconds: 59,
  //       }));
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeLeft]);

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtAmount(value);
    setBjAmount(value / bjRate);
  };

  const handleCopySuccess = () => {
    Notifications("success", "Link copied to clipboard!");
  };

  const handleCopyError = () => {
    // Notifications("error", "Clipboard feature is not supported in this browser.");
  };


  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
    const targetDate = new Date(unixTIme); // Convert to milliseconds

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = unixTIme;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unixTIme]);



  return (
    <div
      className="FundingHero-container"

    >
      <div className="FundingHero-center">
        <p className="FundingHero-whatis">
          <span className="what-is"> What is</span> <span className="FundingHero-highlight">PAXIUM?</span>
        </p>
      </div>
      <p className="FundingHero-peace">
        Peaceful Alliance eXchange for Universal Integrity and Unity Movement
      </p>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        Paxium, standing for the Peaceful Alliance eXchange for Universal Integrity and Unity Movement, is not just a token—it is a global call for peace and unity. Paxium is not a meme token, nor a "shitcoin"; it is an issue token addressing one of the world's greatest challenges: conflict and war.
      </p>

      <div className="mt-4" />
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        Hold Paxium and be one with those who are against war.
      </p>




      <div>
        <p className="FundingHero-lorum" style={{ fontSize: '28px', fontWeight: 'bold' }}>
          Next Price IN
        </p>
        <MyComponent unixTime={unixTIme} />
      </div>
      <p className="FundingHero-lorum" style={{ fontWeight: 'bold' }}>
        Current Price = {getCurrentPrice} USDT

      </p>
      <p className="FundingHero-lorum" style={{ fontWeight: 'bold' }}>
        Total Raised In USDT = {TotalRaisedinusdt} USDT

      </p>
      <p className="FundingHero-lorum" style={{ fontWeight: 'bold' }}>
        NO. Of Holders = {TotalHolders?.toString()}

      </p>

      <br />
      <br />


      {
        true ?

          <>
            <div className="FundingHero-main-divs">

              <div className="FundingHero-box1">
                {
                  <>
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Paxium  Balance</p>
                      <p className="FundingHero-box-number">{parseFloat(balanceOfPaxium).toFixed(2)} Pax</p>
                    </div>
                    <div className="mt-4" />
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Referral Gains  </p>
                      <p className="FundingHero-box-number">{parseFloat(claimHistory?.totalEarned / 10 ** 18).toFixed(2)} Pax</p>
                    </div>
                    <div className="mt-4" />
                    <div>
                      {/* <p className="FundingHero-box-title">Your Referral Link  </p>
                      <p className="FundingHero-box-number">
                        <CopyToClipboard
                          text={`https://Paxium.site/${address}`}
                          onCopy={handleCopySuccess}
                        >
                          <FaCopy
                            style={{ cursor: 'pointer' }}
                            title="Copy"
                            onClick={handleCopyError}
                          />
                        </CopyToClipboard>
                      </p> */}
                      <div className="FundingHero-box-header">
                        <div style={{display:"flex" , flexDirection:"column"}}>
                          <p className="FundingHero-box-title">
                            Your Referral Link
                          </p>
                          <p>address text</p>
                        </div>


                        <CopyToClipboard
                          text={`https://Paxium.site/${address}`}
                          onCopy={handleCopySuccess}
                        >
                          <FaCopy
                            style={{ cursor: 'pointer' }}
                            title="Copy"
                            onClick={handleCopyError}
                          />
                        </CopyToClipboard>
                      </div>

                      <div></div>
                    </div>


                  </>
                }


              </div>

              <div className="FundingHero-box2">

                <p className="paste-text">Paste Referral Link</p>
                <input
                  value={RefAddress}
                  onChange={(e) => {
                    const value = e.target.value;
                    const regex = /(0x[a-fA-F0-9]{40})/; // Regular expression for Ethereum address
                    const match = value.match(regex); // Match the address
                    if (match) {
                      setRefAddress(match[0]); // Set the address if found
                    } else {
                      setRefAddress(''); // Reset if no valid address is found
                    }
                  }}
                  className="FundingHero-input-type"
                  placeholder="Paste Ethereum address or URL here"
                />

                <p className="paste-text">Enter Amount</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>  USDT Balance  : {parseFloat(balanceOfUsdt).toFixed(2)} </p>
                  {/* <p>  Curr   : { balanceOfUsdt  } </p> */}

                </div>

                <input
                  type="number"
                  value={AmountForBuy}
                  onChange={(e) => {
                    setAmountForBuy(e.target.value)
                  }}
                  className="FundingHero-input-type" />

                <div
                  onClick={() => {
                    // Check if the amount exceeds USDT balance
                    if (parseInt(AmountForBuy) >= parseInt(balanceOfUsdt)) {
                      Notifications("error", "Insufficient USDT Balance!");
                    } else {
                      // Validate referral address if present
                      const regex = /(0x[a-fA-F0-9]{40})/; // Ethereum address pattern
                      const isReferralValid = RefAddress && RefAddress.match(regex); // Check if referral is valid

                      if (RefAddress && !isReferralValid) {
                        Notifications("error", "Referral is not valid!");
                      } else {
                        // Approve the token and proceed with buying
                        Token_approvel(AmountForBuy * 10 ** 18)
                          .then(async () => {
                            await new Promise((resolve) => setTimeout(resolve, 10000));

                            if (RefAddress) {
                              // If referral is present and valid
                              BuyTokens(AmountForBuy * 10 ** 18, RefAddress)
                                .then(async () => {
                                  // Handle success
                                })
                                .catch(() => {
                                  // Handle error
                                });
                            } else {
                              // If no referral is present
                              buyTokensWithoutReferral(AmountForBuy * 10 ** 18)
                                .then(() => {
                                  // Handle success
                                })
                                .catch(() => {
                                  // Handle error
                                });
                            }
                          })
                          .catch(() => {
                            // Handle error in token approval
                          });
                      }
                    }
                  }}
                  className="FundingHero-buy-btn"
                >
                  <button>BUY</button>
                </div>

              </div>

            </div>

          </>
          : <>
            <div className="FundingHero-main-divs">

              <div className="FundingHero-box1">
                {
                  // !claimHistory?.hasClaimed ? 
                  <>
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Slots Available</p>
                      <p className="FundingHero-box-number">{TotalSlots}</p>
                    </div>

                    <p className="FundingHero-box-description">

                      You’ll get $10 worth of dollars by clicking on claim free token

                    </p>
                    <div
                      onClick={() => {

                        setclaimLoader(true)
                        ClaimTokenAirDrop().then(() => {
                          // setclaimLoader(false)
                          checkBalanceAndReload(address
                          )

                          // window.location.reload()
                        }).catch(() => {
                          setclaimLoader(false)
                        })

                      }}

                      className="FundingHero-claim-btn">
                      <button
                        disabled={!address}

                      >
                        {
                          claimLoader ?
                            <PulseLoader size={11} color="rgba(4, 88, 93, 1)" />
                            : address ? '  CLAIM FREE TOKEN' : 'Connect Wallet To Claim Free Tokens'
                        }
                      </button>
                    </div>

                  </>
                  // :
                  // <>
                  //     <div className="FundingHero-box-header">
                  //   <p className="FundingHero-box-title">Paxium  Balance</p>
                  //   <p className="FundingHero-box-number">{ balanceOfPaxium  } Pax</p>
                  // </div>
                  // <div className="mt-4" />
                  // <div className="FundingHero-box-header">
                  //   <p className="FundingHero-box-title">Claimed Paxium  </p>
                  //   <p className="FundingHero-box-number">{ claimHistory?.totalEarned }</p>
                  // </div>
                  // <div className="mt-4" />
                  // <div className="FundingHero-box-header">
                  //   <p className="FundingHero-box-title">Referral Link  </p>
                  //   <p className="FundingHero-box-number">{  } <FaCopy 
                  //   style={{cursor:'pointer'}}
                  //   title="copy"  
                  //    onClick={()=>{
                  //     navigator.clipboard
                  //     .writeText(`https://Paxium.site/${address}`)
                  //     .then(() => {
                  //       Notifications("success", "Link copied to clipboard!");
                  //     })
                  //     .catch((err) => {
                  //       console.error("Failed to copy address: ", err);
                  //     });
                  //    }}
                  //   /> </p>
                  // </div>

                  // </>
                }


              </div>
            </div>
          </>

      }



      <div className="FundingHero-images-link">

        <img src={telegram} alt="Telegram" onClick={() => {

          window.open(Telegram_link, "_blank")

        }} />
        <img src={twitter} alt="Telegram" onClick={() => {

          window.open(twitter_link, "_blank")

        }} />
        {/* <img src={instagram} alt="Instagram" /> */}
      </div>
    </div>
  );
};

export default FundingHero;
