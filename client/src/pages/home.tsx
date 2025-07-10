import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import WhatYouGet from "@/components/sections/what-you-get";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
