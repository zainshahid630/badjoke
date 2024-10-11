import './roadmap.css';
import feature from '../../assets/our-Feature.png';
import logotoken from '../../assets/bg-notoken.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useAccount } from 'wagmi';
import { ClaimerRewardHistory } from '../../utils/Calls';
import { useState } from 'react';





const RoadMap = () => {

    const { address, isConnecting, isDisconnected ,connector  } = useAccount();
    const [claimHistory , setclaimHistory] = useState()


    useState(()=>{
    ClaimerRewardHistory(address).then((his)=>{
        console.log('ClaimerRewardHistory',his)
        setclaimHistory(his)
      }).catch(()=>{
  
      })
    },[address])


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
                        <div className="roadmap-copy-box">
                            Copy link
                        </div>
                    </div>

                    <div className="roadmap-stats-container">
                        <div className="roadmap-stats-card">
                            <div className="roadmap-stats-text">Total<br />Referrals</div>
                            <div className="roadmap-stats-number">65</div>
                        </div>

                        <div className="roadmap-stats-card">
                            <div className="roadmap-stats-text">Total<br />Amount</div>
                            <div className="roadmap-stats-amount">$56461</div>
                        </div>
                    </div>

                    <div className="roadmap-latest-invited-box">
                        <div className="roadmap-latest-invited-text">
                            Latest Invited
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadMap;
