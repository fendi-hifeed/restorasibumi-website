import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import ImpactStats from "@/components/ImpactStats";
import ReGenPrograms from "@/components/ReGenPrograms";
import DonationCard from "@/components/DonationCard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <VisionMission />
      <ImpactStats />
      <ReGenPrograms />
      <DonationCard />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
