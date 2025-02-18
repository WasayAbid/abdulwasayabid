import NetworkAnimation from "@/components/NetworkAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WhyChooseMe from "@/components/WhyChooseMe";
import WorkExperience from "@/components/WorkExperience";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main className="relative">
      <NetworkAnimation />
      <Navbar />
      <Hero />
      <Overview />
      <WhyChooseMe />
      <WorkExperience />
      <Certificates />
    </main>
  );
}
