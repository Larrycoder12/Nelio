import { Hero } from "@/components/hero";
import { Positioning } from "@/components/positioning";
import { HowItWorks } from "@/components/how-it-works";
import { Comparison } from "@/components/comparison";
import { PilotOffer } from "@/components/pilot-offer";
import { SocialProof } from "@/components/social-proof";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <HowItWorks />
      <Comparison />
      <PilotOffer />
      <SocialProof />
      <FinalCta />
    </>
  );
}
