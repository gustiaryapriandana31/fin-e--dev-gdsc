import { HeroSection } from './components/customerComponents/HeroSection';
import { Navbar } from './components/customerComponents/Navbar';

function App() {

  return (
    <>
      <div className="bg-amber-500/85 h-screen pt-5">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App
