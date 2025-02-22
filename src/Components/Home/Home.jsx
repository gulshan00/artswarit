

import Navbar from "../Navbar/Navbar";
import HeroSection from "../Herosection/Herosection";
import ExploreArtists from "../ExploreArtists/ExploreArtists";
import Footer from "../Footer/Footer";
import LandingPageSections from "../LandingPageSection/LandingPageSections";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <HeroSection />
      <ExploreArtists />
<LandingPageSections />
      <Footer />
    </div>
  );
};

export default Home;
