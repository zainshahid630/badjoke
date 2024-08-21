import './roadmap.css'
import feature from '../../assets/our-Feature.png'
import logotoken from '../../assets/bg-notoken.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const RoadMap = () => {
    return (
        <div className='roapmap'>
            <div  className='mt-5'  style={{color:'#E8FCAF', textAlign:'-webkit-center'  }}> 
                  <img src={feature} />
            </div>
            <div className="box">
                
                <div className="wrapper full">
                    <div className="row">
                        <div className="col-12 col-md-6 feature-card" >
                            <div className='roadmap-card mb d-flex'>
                               
                                <div>
                                    <h2>Token Giveaways</h2>
                                    <p>Join our Telegram and get free tokens when you drop your BEP-20 wallet address.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 feature-card" style={{position:'relative'}}>
                            <div className='roadmap-card mb d-flex' >
                                
                                <div > 
                                <img className='feature_tokenimage' src={logotoken}  />
                                
                                    <h2>Bonus on Big Purchases</h2>
                                    <p>Buy over $1001 worth of tokens and receive a unique referral code for extra rewards.</p>         </div>
                            </div>
                        </div>
                    </div>
                    <div className="roadmap-card-sep"></div>
                    <div className="row">
                        <div className="col-12 col-md-6 feature-card">
                            <div className='roadmap-card mb d-flex'>
                                
                                <div>
                                    <h2>Exclusive Promo Codes</h2>
                                    <p>Unlock 15% extra tokens with our promo codes! Stack up bonuses for even greater rewards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 feature-card">
                            <div className='roadmap-card d-flex'>
                               
                                <div className=''>
                                    <h2>Limited Supply of 100 Billion</h2>
                                    <p>Only 100 billion tokens available! Grab yours now before they run out and the price skyrockets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap