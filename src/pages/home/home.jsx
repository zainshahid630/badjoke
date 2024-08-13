import FAQs from "../../components/faq/faq"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import Ibar from "../../components/ibar/ibar"
import Partners from "../../components/partners/partners"
import Refill from "../../components/refill/refill"
import RoadMap from "../../components/roadmap/roadmap"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Ibar />
            <RoadMap />
           
            <Partners />
            <FAQs/>
            <Footer />
        </>
    )
}

export default Home