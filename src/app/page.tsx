import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import TransparencySection from "@/components/transparency-section";
import IngredientCards from "@/components/ingredient-cards";
import FounderStory from "@/components/founder-story";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <TransparencySection />
      <IngredientCards />
      <FounderStory />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}