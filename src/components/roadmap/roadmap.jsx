import './roadmap.css';
import feature from '../../assets/our-Feature.png';
import logotoken from '../../assets/bg-notoken.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const RoadMap = () => {
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
                            fd476tr4y4rt764fhhf76fh8f4hr65yhuht5hf5yt5nf8748jdowyr834h546567u76h67uynyyedw34rcfj869kj
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
