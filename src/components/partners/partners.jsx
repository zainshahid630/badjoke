import "./partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Partners = () => {
  return (
    <div className="partners">
      <div className="box">
        <div className="wrapper full">
          <h2 className="partners-head">ROADMAP</h2>
          <div className="swipper-wrapper">
          <div className="row">
                        <div className=" col-md-6">
                            <div className='roadmap-card mb d-flex'>
                               
                                <div>
                                    <h2>Stake-to-Earn Rewards</h2>
                                    <p>Stake your Doge2014 tokens to earn passive rewards while celebrating the legacy of Dogecoin's journey from 2014.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='roadmap-card mb d-flex'>
                              
                                
                                <div > 
                                    <h2>Easy Wallet Integration</h2>
                                    <p>Seamlessly add Doge2014 in your EVM wallet such as MetaMask and start staking to celebrate Dogecoin's ten-year milestone</p>
                                </div>
                            </div>
                        </div>
                                    <div className="col-md-6">
                            <div className='roadmap-card mb d-flex'>
                              
                                
                                <div > 
                                    <h2>Easy Wallet Integration</h2>
                                    <p>Seamlessly add Doge2014 in your EVM wallet such as MetaMask and start staking to celebrate Dogecoin's ten-year milestone</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='roadmap-card mb d-flex'>
                              
                                
                                <div > 
                                    <h2>Easy Wallet Integration</h2>
                                    <p>Seamlessly add Doge2014 in your EVM wallet such as MetaMask and start staking to celebrate Dogecoin's ten-year milestone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
