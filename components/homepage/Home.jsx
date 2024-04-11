import BalloAdsDemo from "./balloAds/BalloAdsDemo"
import HeroSection from "./heroSection/HeroSection"
import './home.css'
import OurPriority from "./ourPriority/OurPriority"

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurPriority />
      <BalloAdsDemo />
    </>
  )
}

export default Home
