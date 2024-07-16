import Navbar from "./components/layouts/Navbar";
import HeroSection from "./components/layouts/HeroSection";
import About from "./components/layouts/About"
import Composition from "./components/layouts/Composition";
import FormReviewer from "./components/layouts/FormReviewer";

function App() {
  return (
    <>
      <div className="bg-amber-500/85 md:pt-5">
        <Navbar />
        <HeroSection />
        <About />
        <Composition />
        <FormReviewer />
      </div>
    </>
  );
}

export default App;
