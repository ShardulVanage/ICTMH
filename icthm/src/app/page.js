import AboutSection from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta";
import Dates from "@/components/Dates";
import FAQSection from "@/components/FAq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ConferenceHighlightSection from "@/components/Hightlight";
import Navbar from "@/components/Navbar";
import ConferenceObjectives from "@/components/Objective";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <CoOrganizationLogos/>
   <AboutSection/>
   <ConferenceObjectives/>
   <ConferenceHighlightSection/>
   <CTASection/>
   <Dates/>
   <FAQSection/>
   <Footer/>
   </>
  );
}
