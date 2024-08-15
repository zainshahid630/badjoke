import './roadmap.css'
import feature from '../../assets/our-Feature.png'
import logotoken from '../../assets/bg-token.png'

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
                        <div className="col-12 col-md-6">
                            <div className='roadmap-card mb d-flex'>
                               
                                <div>
                                    <h2>Stake-to-Earn Rewards</h2>
                                    <p>Stake your Doge2014 tokens to earn passive rewards while celebrating the legacy of Dogecoin's journey from 2014.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='roadmap-card mb d-flex' style={{position:'relative'}}>
                                <img className='feature_tokenimage' src={logotoken} />
                                
                                <div > 
                                    <h2>Easy Wallet Integration</h2>
                                    <p>Seamlessly add Doge2014 in your EVM wallet such as MetaMask and start staking to celebrate Dogecoin's ten-year milestone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roadmap-card-sep"></div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='roadmap-card mb d-flex'>
                                
                                <div>
                                    <h2>Secure and Transparent</h2>
                                    <p>Enjoy secure and transparent staking on Ethereum's blockchain, celebrating ten years of Dogecoin's impact.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='roadmap-card d-flex'>
                               
                                <div className=''>
                                    <h2>Hold to Celebrate</h2>
                                    <p>Celebrate ten years of Dogecoin by simply holding Doge2014 tokens and enjoy being part of the community.</p>
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