import WorldClassSection from "@/components/WorldClassSection";
import Navbar from "../components/Navbar";
import LandingPage from "./pages/LandingPage";
import JobSection from "@/components/JobSection";
import QuoteSection from "@/components/QuoteSection";
import ProjectsSection from "@/components/ProjectsSection";
import CredibilitySection from "@/components/CredibilitySection";
import CollaborationSection from "@/components/CollaborationSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <WorldClassSection />
      <JobSection />
      <QuoteSection />
      <ProjectsSection />
      <CredibilitySection />
      <CollaborationSection />
    </>
  );
}
