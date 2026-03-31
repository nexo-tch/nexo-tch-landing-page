import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Problem } from "@/components/home/Problem";
import { Products } from "@/components/home/Products";
import { Benefits } from "@/components/home/Benefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Products />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </>
  );
}
