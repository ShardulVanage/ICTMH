import AboutSection from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta";
import Dates from "@/components/Dates";
import FAQSection from "@/components/FAq";
import Hero from "@/components/Hero";
import ConferenceHighlightSection from "@/components/Hightlight";
import ConferenceObjectives from "@/components/Objective";

export default function Home() {
  return (
   <>
   <Hero/>
   <CoOrganizationLogos/>
   <AboutSection/>
   <ConferenceObjectives/>
   <ConferenceHighlightSection/>
   <CTASection/>
   <Dates/>
   <FAQSection/>
   </>
  );
}
