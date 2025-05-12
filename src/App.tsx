import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { HobbiesSection } from "@/components/HobbiesSection";
import { Footer } from "@/components/Footer";

function App() {
  const connectRef = useRef(null);

  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <button onClick={scrollToConnect} className="contact-button">
            Contact Me
          </button>
          <SocialLinks />
          <HobbiesSection />
        </main>
        <Footer />
        {/* Add the ref to the "Connect with me" section */}
        <div ref={connectRef} id="connect-with-me">
          {/* Your connect with me content here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
