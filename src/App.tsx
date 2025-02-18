import NetworkAnimation from "./components/NetworkAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import WhyChooseMe from "./components/WhyChooseMe";
import WorkExperience from "./components/WorkExperience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="relative">
      <NetworkAnimation />
      <Navbar />
      <Hero />
      <Overview />
      <WhyChooseMe />
      <Skills />
      <WorkExperience />
      <Certificates />
      <Contact />
    </main>
  );
}

export default App;
