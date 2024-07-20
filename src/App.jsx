import Navbar from "./components/layouts/Navbar";
import HeroSection from "./components/pages/HeroSection";
import About from "./components/pages/About"
import Composition from "./components/pages/Composition";
import Ingredients from "./components/pages/Ingredients";
import FormReviewer from "./components/layouts/FormReviewer";
import Footer from "./components/layouts/Footer"; 

function App () {
  return (
    <>
      <div className="bg-amber-500/85 md:pt-5">
        <Navbar />
        <HeroSection />
        <About />
        <Composition />
        <Ingredients />
        <Footer />
      </div>
    </>
  );
}

export default App;
