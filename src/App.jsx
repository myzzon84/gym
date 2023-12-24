import Header from "./components/Header";
import Hero from "./components/Hero";
import Shape from "./components/Shape";
import Changes from "./components/Changes";
import OurClasses from "./components/OurClasses";
import TopTrainers from "./components/TopTrainers";
import Schedule from "./components/Schedule";
import PricingPlans from "./components/PricingPlans";
import GymStore from "./components/GymStore";
import Reviews from "./components/Reviews";
import Calculator from "./components/Calculator";
import Consultant from "./components/Consultant";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import appStore from "./components/appStore";

import { UseSizePage } from "./helpers/UseSizePage";

function App() {
  const widthHeight = UseSizePage();
  const _width = widthHeight[0];
  const _height = widthHeight[1];

  const showMobileMenu = appStore(state => state.showMobileMenu);

  return (
    <div className={`max-w-[1440px] mx-auto relative ${showMobileMenu ? 'h-[100vh] overflow-y-hidden' : ''} overflow-x-hidden`}>
      <Hero />
      <Header />
      <Shape />
      <Changes />
      <OurClasses />
      <TopTrainers />
      <Schedule />
      <PricingPlans />
      <GymStore />
      <Reviews />
      <Calculator />
      <Consultant />
      <Footer />
      <Copyright />
      <div className={` fixed top-0 left-0 px-2 bg-white font-bold`}>
        {`${_width} x ${_height}`}
      </div>
    </div>
  )
}

export default App
