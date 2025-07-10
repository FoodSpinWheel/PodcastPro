import { FileText, Clock, Search, User, Share2, Star } from "lucide-react";

export default function WhatYouGet() {
  const services = [
    {
      icon: FileText,
      title: "Show Notes Summary",
      description: "Comprehensive episode summaries that capture key talking points, insights, and takeaways. Perfect for your website and podcast platforms to help listeners understand what they'll learn."
    },
    {
      icon: Clock,
      title: "Timestamps & Chapters",
      description: "Detailed timestamps marking important topics and segments. Makes your content more navigable and improves listener experience with easy-to-find sections."
    },
    {
      icon: Search,
      title: "SEO-Optimized Title & Description",
      description: "Keyword-rich titles and descriptions designed to improve discoverability. Helps your podcast rank better in search results and attract more listeners organically."
    },
    {
      icon: User,
      title: "Guest Bio",
      description: "Professional guest biographies when applicable, highlighting their expertise and credentials. Adds credibility and context for your audience."
    },
    {
      icon: Share2,
      title: "Social Media Captions",
      description: "Ready-to-post social media content for multiple platforms. Includes engaging captions with relevant hashtags to maximize your episode's reach and engagement."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "All content is carefully reviewed and edited for accuracy, readability, and professional presentation. We ensure everything meets the highest standards."
    }
  ];

  return (
    <section id="what-you-get" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You Get</h2>
          <p className="text-lg text-gray-600">Complete content package for every episode</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-xl">
              <div className="text-accent mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-medium">
              Transform your raw audio into professional, engaging content that builds your audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
