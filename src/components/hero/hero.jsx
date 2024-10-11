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
import { BuyTokens, buyTokensWithoutReferral, ClaimerRewardHistory, ClaimTokenAirDrop, GetBalanceOfPaxium, GetBalanceOfUSDT, GetTotalSlots, Token_approvel } from "../../utils/Calls";
import { Notifications } from "../Notifications";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";


const FundingHero = () => {

  const location = useParams()

  const [balanceOfUsdt, setbalanceOfUsdt] = useState()










  const { address, isConnecting, isDisconnected, connector } = useAccount();
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 4,
    minutes: 8,
    seconds: 47,
  });
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
  const bjRate = 0.000294;
  const remainingBJ = 5000;
  const TotalBJ = 100000;
  const percentage = (remainingBJ / TotalBJ) * 100;
  const formattedPercentage = percentage.toFixed(2);
  const [claimHistory, setclaimHistory] = useState()
  const [RefAddress, setRefAddress] = useState()

  const [TotalSlots, setTotalSlots] = useState()
  const [balanceOfPaxium, setbalanceOfPaxium] = useState()
  useState(() => {
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


  }, [address, location, isConnecting ])

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

  useEffect(() => {

    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      } else if (minutes > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          minutes: prevState.minutes - 1,
          seconds: 59,
        }));
      } else if (hours > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          hours: prevState.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (days > 0) {
        setTimeLeft((prevState) => ({
          ...prevState,
          days: prevState.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtAmount(value);
    setBjAmount(value / bjRate);
  };



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
        Peace, Unity, Integrity, and Hope for All.
      </p>



      <p className="FundingHero-lorum">
        Lorem ipsum dolor sit amet consectetur. Gravida sit eleifend morbi
        faucibus ut urna. Sem urna arcu massa ultrices nec urna velit.
        Tincidunt nunc lobortis cursus suscipit id ultricies nec. Tellus
        feugiat amet massa nunc.
      </p>
      <br />
      <br />


      {
        parseInt(balanceOfPaxium) > 0   && address ?

          <>
            <div className="FundingHero-main-divs">

              <div className="FundingHero-box1">
                {
                  //     !claimHistory?.hasClaimed ? 
                  // <>
                  //     <div className="FundingHero-box-header">
                  //   <p className="FundingHero-box-title">Slots Available</p>
                  //   <p className="FundingHero-box-number">{ TotalSlots }</p>
                  // </div>

                  // <p className="FundingHero-box-description">

                  //   You’ll get $10 worth of dollars by clicking on claim free token

                  // </p>
                  // <div
                  //       onClick={()=>{
                  //         setclaimLoader(true)
                  //         ClaimTokenAirDrop().then(()=>{
                  //           setclaimLoader(false)
                  //         }).catch(()=>{
                  //           setclaimLoader(false)
                  //         })

                  //        }}

                  // className="FundingHero-claim-btn">
                  // <button 
                  //  disabled={!address}

                  // >
                  //   {
                  //      claimLoader ? 
                  //      <PulseLoader size={11}  color="rgba(4, 88, 93, 1)"/>
                  //      :'  CLAIM FREE TOKEN'
                  //   }
                  // </button>
                  // </div>

                  // </>:
                  <>
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Paxium  Balance</p>
                      <p className="FundingHero-box-number">{balanceOfPaxium} Pax</p>
                    </div>
                    <div className="mt-4" />
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Referral Gains  </p>
                      <p className="FundingHero-box-number">{claimHistory?.totalEarned  / 10 ** 18 } Pax</p>
                    </div>
                    <div className="mt-4" />
                    <div className="FundingHero-box-header">
                      <p className="FundingHero-box-title">Referral Link  </p>
                      <p className="FundingHero-box-number">{ } <FaCopy
                        style={{ cursor: 'pointer' }}
                        title="copy"
                        onClick={() => {
                          navigator.clipboard
                            .writeText(`https://Paxium.site/${address}`)
                            .then(() => {
                              Notifications("success", "Link copied to clipboard!");
                            })
                            .catch((err) => {
                              console.error("Failed to copy address: ", err);
                            });
                        }}
                      /> </p>
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
                <input
                  value={AmountForBuy}
                  onChange={(e) => {
                    setAmountForBuy(e.target.value)
                  }}
                  className="FundingHero-input-type" />

                <div
                  onClick={() => {
                    // Check if the amount exceeds USDT balance
                    if (parseInt(AmountForBuy) > parseInt(balanceOfUsdt)) {
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
                          setclaimLoader(false)
                          Notifications('Token Claimed Successfully')
                          window.location.reload()
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
        <img src={twitter} alt="Twitter" />
        <img src={discord} alt="Discord" />
        <img src={telegram} alt="Telegram" />
        <img src={instagram} alt="Instagram" />
      </div>
    </div>
  );
};

export default FundingHero;
