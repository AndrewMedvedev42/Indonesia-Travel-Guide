import { NavigationMenu } from "./components/navigation-menu";
import { LandingSection } from "./components/landing-section";
import { AboutProjectSection } from "./components/about-project-section";
import { MapSection } from "./components/map-section";
import { HistorySection } from "./components/history-section";
import { TopFivePlacesSection } from "./components/top-5-places-section";
import { NineTipsSection } from "./components/9-tips-section";
import { GallerySection } from "./components/gallery-section";

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <section>
        <LandingSection/>
        <AboutProjectSection/>
        <MapSection/>
        <HistorySection/>
        <TopFivePlacesSection/>
        <NineTipsSection/>
        <GallerySection/>
      </section>
    </div>
  );
}

export default App;
