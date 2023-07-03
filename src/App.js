import "./index.css";
import GenralSection from "./sections/generalSection/GenralSection";
import HeroSection from "./sections/heroSection/HeroSection";
import aboutImage from "./assets/image/about-section.png";
import cookingImage from "./assets/image/cook-int.png";
import SpecialSection from "./sections/specialSection/SpecialSection";

function App() {
  return (
    <div>
      <HeroSection />
      <div className="background-container">
        <GenralSection
          title="About Us"
          subtitle="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate atque quia eaque tempora labore aliquid molestiae. Totam non maiores tempore deserunt deleniti illo esse rem nobis minus, odit explicabo?"
          imageSrc={aboutImage}
        />
        <SpecialSection/>

        <GenralSection
          title="Cooking ingredients"
          subtitle="What goes in"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc={cookingImage}
        />
      </div>
    </div>
  );
}

export default App;
