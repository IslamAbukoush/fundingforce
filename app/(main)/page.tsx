import Hero from "./_components/Hero";
import RecognitionCarousel from "./_components/RecognitionCarousel";
import WhyChooseUs from "./_components/WhyChooseUs";
import FundingSteps from "./_components/FundingSteps";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <RecognitionCarousel />
      <WhyChooseUs />
	  <FundingSteps />
	  <Testimonials />
    </div>
  );
}
