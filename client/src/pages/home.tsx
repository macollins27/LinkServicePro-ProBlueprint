import Hero from "@/components/Hero";
import WorkflowWhite from "@/sections/WorkflowWhite";
import Industries from "@/components/home/Industries";
import WhySwitchWhite from "@/sections/WhySwitchWhite";
import PropertyLinkwareIntegration from "@/components/home/PropertyLinkwareIntegration";
import QuickStart from "@/components/home/QuickStart";
import { Pricing } from "@/components/home/Pricing";
import { Resources } from "@/components/home/Resources";
import FinalCtaBand from "@/sections/FinalCtaBand";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SectionTheme from "@/components/layout/SectionTheme";
import SectionDividerCollage from "@/components/layout/SectionDividerCollage";

export default function Home() {
  return (
    <>
      <SectionTheme theme="navy" withGrid>
        <Hero />
      </SectionTheme>
      
      <SectionTheme theme="white">
        <WorkflowWhite />
      </SectionTheme>
      
      <SectionDividerCollage />
      
      <SectionTheme theme="white">
        <Industries />
      </SectionTheme>
      
      <SectionDividerCollage />
      
      <SectionTheme theme="white">
        <WhySwitchWhite />
      </SectionTheme>
      
      <SectionTheme theme="white">
        <PropertyLinkwareIntegration />
      </SectionTheme>
      
      <SectionDividerCollage />
      
      <SectionTheme theme="navy" withGrid>
        <QuickStart />
      </SectionTheme>
      
      <SectionTheme theme="white">
        <Pricing />
        <Resources />
      </SectionTheme>
      
      <SectionTheme theme="navy">
        <FinalCtaBand />
      </SectionTheme>
      
      <StickyMobileCTA />
    </>
  );
}
