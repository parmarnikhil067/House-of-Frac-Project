import { type JSX } from "react";
import RealEstate from "@/components/Base/RealEstate";
import CommunitySection from "@/components/Base/CommunitySection";
import WhatWeDoSection from "@/components/Base/WhatWeDoSection";
import ComplianceSection from "@/components/Base/ComplianceSection";
import TestimonialSection from "@/components/Base/TestimonialSection";
import CollaborateSection from "@/components/Base/CollaborateSection";
import BlogSection from "@/components/Base/BlogSection";
import FAQSection from "@/components/Base/FAQSection";
import ExploreSection from "@/components/Base/ExploreSection";

export default function Home(): JSX.Element {
  return (<>
<RealEstate/>
<CommunitySection/>
<WhatWeDoSection/>
<ComplianceSection/>
<TestimonialSection/>
<CollaborateSection/>
<BlogSection/>
<FAQSection/>
<ExploreSection/>

</>
  );
}
