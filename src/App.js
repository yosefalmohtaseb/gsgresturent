import './index.css';
import AboutSection from './sections/aboutSection/AboutSection';
import HeroSection from './sections/heroSection/HeroSection';

function App() {
  return (
    <div>
      <HeroSection />
      <div  className="background-container"> 
      <AboutSection/> 
      </div>
    </div>
  );
}

export default App;
