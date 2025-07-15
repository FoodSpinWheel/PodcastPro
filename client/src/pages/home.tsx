import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import WhatYouGet from "@/components/sections/what-you-get";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  useEffect(() => {
    // Handle anchor hash scrolling when page loads
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // Remove the # symbol
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Small delay to ensure the page is fully rendered
          setTimeout(() => {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    // Call immediately and also after a delay for slow loading
    handleHashScroll();
    const timer = setTimeout(handleHashScroll, 500);

    return () => clearTimeout(timer);
  }, []);

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
