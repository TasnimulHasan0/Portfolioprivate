import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { HobbiesSection } from "@/components/HobbiesSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <SocialLinks />
          <HobbiesSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
