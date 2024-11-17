

import Navbar from "../Navbar/Navbar";
import HeroSection from "../Herosection/Herosection";
import ExploreArtists from "../ExploreArtists/ExploreArtists";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <HeroSection />
      <ExploreArtists />
      <Footer />
    </div>
  );
};

export default Home;
