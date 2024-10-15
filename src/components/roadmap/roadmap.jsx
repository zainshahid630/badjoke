import './roadmap.css';
import feature from '../../assets/our-Feature.png';
import logotoken from '../../assets/bg-notoken.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAccount } from 'wagmi';
import { ClaimerRewardHistory, GetPriceOfPaxium, getReferralBonusEarned } from '../../utils/Calls';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Notifications } from '../Notifications';





const RoadMap = () => {

    const { address, isConnecting, isDisconnected ,connector  } = useAccount();
    const [claimHistory , setclaimHistory] = useState()
    const [getReferralBonusearned  , setReferralBonusEarn    ] = useState(0)
    const [CurrentPrice  , setCurrentPrice] = useState(0)
     
    useState(()=>{
        getReferralBonusEarned(address).then((bonus)=>{
            setReferralBonusEarn( bonus   / 10 ** 18)
        }).catch(()=>{

        })
        GetPriceOfPaxium().then((price)=>{
            // console.log(price,'setCurrentPrice')
            setCurrentPrice(price / 10 ** 18 )
      
          }).catch(()=>{
      
          })



    ClaimerRewardHistory(address).then((his)=>{
        console.log('ClaimerRewardHistory',his)
        setclaimHistory(his)
      }).catch(()=>{
  
      })
    },[address])
    const handleCopySuccess = () => {
        Notifications("success", "Link copied to clipboard!");
      };

    return (
        <div className='roadmap-container'>
            <div className="roadmap-padding">
                <p className="roadmap-heading">
                    Referral & <span className="roadmap-highlight">Bonus</span>
                </p>

                <div className="roadmap-referral-box">
                    <p className="roadmap-subheading">Referral Link</p>
                    <div className="roadmap-link-container">
                        <div className="roadmap-link-box">
                            {
                                claimHistory?.hasClaimed 
                                ?  
                                `https://Paxium.site/${address}` 
                                : 'Claim or Buy Token First '

                            }
                            
                        </div>
                        <CopyToClipboard
      text={`https://Paxium.site/${address}`}
      onCopy={handleCopySuccess}
    >
      <div className="roadmap-copy-box" style={{ cursor: 'pointer' }}>
        Copy link
      </div>
    </CopyToClipboard>
                    </div>

                    <div className="roadmap-stats-container">
                        <div className="roadmap-stats-card">
                            <div className="roadmap-stats-text">Reward Generated In<br />Paxium</div>
                            <div className="roadmap-stats-number">{getReferralBonusearned ?? 0 } PAX</div>
                        </div>

                        <div className="roadmap-stats-card">
                            <div className="roadmap-stats-text">Reward Generated In<br />USDT</div>
                            <div className="roadmap-stats-amount">${(getReferralBonusearned *   CurrentPrice ) ?? 0  }</div>
                        </div>
                    </div>

                    {/* <div className="roadmap-latest-invited-box">
                        <div className="roadmap-latest-invited-text">
                            Latest Invited
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default RoadMap;
