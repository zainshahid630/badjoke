import React from "react";
import Buy from "../../components/buy/buy";
import FAQs from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Ibar from "../../components/ibar/ibar";
import Partners from "../../components/partners/partners";
import Refill from "../../components/refill/refill";
import RoadMap from "../../components/roadmap/roadmap";
import bgimage from '../../assets/home-bg.png'; // Update the path if needed
import buyimage from '../../assets/buy-image.png'; // Update the path if needed
import Fundingbonus from "../../components/bonus/hero";
import FundingToken from "../../components/Token/token";


const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Header />
            <Hero />

            <Ibar />
            <RoadMap />
            <div style={{ backgroundImage: `url(${buyimage})` , backgroundRepeat:'round'}} >
            <Buy />
            </div>
            <Partners />

            <FundingToken />

            <div style={{ backgroundImage: `url(${buyimage})` , backgroundRepeat:'round'}} >

             <Fundingbonus />

             </div>

            <FAQs />
            <Footer />
        </div>
    );
}

export default Home;
