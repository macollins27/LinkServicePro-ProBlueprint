import { useParams } from "react-router-dom";
import { industryLandingPages } from "@/data/industryLandingPages";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";
import NotFound from "./not-found";

export default function DynamicIndustryLanding() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !industryLandingPages[slug]) {
    return <NotFound />;
  }

  const industry = industryLandingPages[slug];

  return <IndustryLandingTemplate industry={industry} />;
}
