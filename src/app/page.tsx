import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Problem } from "@/components/home/Problem";
import { Products } from "@/components/home/Products";
import { Benefits } from "@/components/home/Benefits";
import { CommercialModel } from "@/components/home/CommercialModel";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Evidence } from "@/components/home/Evidence";
import { FAQ } from "@/components/home/FAQ";
import { FAQSchema } from "@/components/home/FAQSchema";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <SocialProof />
      <Problem />
      <Products />
      <Benefits />
      <CommercialModel />
      <HowItWorks />
      <Evidence />
      <FAQ />
      <CTAFinal />
    </>
  );
}
