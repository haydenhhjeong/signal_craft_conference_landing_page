import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
// import { WhyBentoGrid } from "@/features/why-us/WhyBentoGrid";
import { GuideSection } from "@/features/guide/GuideSection";
import { CaseStories } from "@/features/case-studies/CaseStories";
// import { NewsSection } from "@/features/news/NewsSection";
import { FAQSection } from "@/features/faq/FAQSection";
import { ContactSection } from "@/features/contact/ContactSection";

const SectionDivider = () => (
  <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SectionDivider />

      <AboutSection />
      {/* <WhyBentoGrid /> */}
      <SectionDivider />

      <GuideSection />
      <SectionDivider />

      <CaseStories />
      {/* <NewsSection /> */}
      <SectionDivider />

      <FAQSection />
      <SectionDivider />

      <ContactSection />
    </div>
  );
}
