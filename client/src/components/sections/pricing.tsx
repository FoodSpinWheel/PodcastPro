import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap, FileText, Mail, Video, FileImage, Search } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$400",
      episodes: "4 episodes per month",
      features: [
        "Show notes & summaries",
        "Timestamps & chapters",
        "SEO-optimized content",
        "Social media captions"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      isPopular: false
    },
    {
      name: "Growth",
      price: "$760",
      episodes: "8 episodes per month",
      features: [
        "Everything in Starter",
        "Priority processing",
        "Dedicated project manager",
        "Extended revisions"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      isPopular: false
    },
    {
      name: "Pro",
      price: "$1,080",
      episodes: "12 episodes per month",
      features: [
        "Everything in Growth",
        "Monthly performance insights",
        "Discounted add-ons",
        "Priority support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      isPopular: false
    },
    {
      name: "Elite",
      price: "$1,275+",
      episodes: "15+ episodes per month",
      features: [
        "Everything in Pro",
        "Custom solutions",
        "Volume pricing",
        "Enterprise support"
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline" as const,
      isPopular: false
    }
  ];

  const addOns = [
    {
      icon: FileText,
      name: "Blog Recap",
      price: "$60",
      features: [
        "600-1000 word blog post derived from the episode transcript and show notes",
        "SEO-optimized headline and subheadings",
        "Keywords integrated naturally"
      ]
    },
    {
      icon: Mail,
      name: "Newsletter Summary",
      price: "$25",
      features: [
        "100-200 word email-ready summary",
        "Catchy subject line and call to action",
        "Optional thumbnail image recommendation"
      ]
    },
    {
      icon: Video,
      name: "Audiograms",
      price: "$50",
      features: [
        "30-60 second video clip",
        "Captions and waveform animation",
        "Branded colors and podcast artwork",
        "MP4 delivery ready for social media"
      ]
    },
    {
      icon: FileImage,
      name: "Episode Transcripts",
      price: "$40",
      features: [
        "Clean, proofread transcript",
        "Delivered in PDF and Word format",
        "Time-stamps included"
      ]
    },
    {
      icon: Search,
      name: "SEO Keyword Report",
      price: "$50",
      features: [
        "List of 10-15 related keywords",
        "Suggested hashtags",
        "Recommended blog post topics",
        "Short paragraph on strategy"
      ]
    }
  ];

  const premiumBenefits = [
    { icon: Zap, text: "Priority processing" },
    { icon: Star, text: "Dedicated project manager" },
    { icon: Star, text: "Extended revisions" },
    { icon: Star, text: "Monthly performance insights" },
    { icon: Star, text: "Discounted add-ons" },
    { icon: Star, text: "Priority support" }
  ];

  const handleContactClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple Monthly Packages</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your podcast publishing schedule</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
              <h3 className="text-xl font-semibold text-primary mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">
                {plan.price}
                <span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.episodes}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleContactClick}
                variant={plan.buttonVariant}
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Flexible Pricing Section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">Premium Benefits (8+ Episodes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
              {premiumBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <benefit.icon className="h-4 w-4 text-accent mr-2" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Need flexible pricing? We offer per-episode rates starting at $120 each.
          </p>
          <Button
            onClick={handleContactClick}
            className="mt-4 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors"
          >
            Book Your Free Trial Episode
          </Button>
        </div>
        
        {/* Add-ons Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Add-Ons</h3>
            <p className="text-lg text-gray-600">Enhance your podcast content with these additional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <addon.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{addon.name}</h4>
                    <p className="text-2xl font-bold text-gray-800">
                      {addon.price}
                      <span className="text-sm text-gray-500">/episode</span>
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
