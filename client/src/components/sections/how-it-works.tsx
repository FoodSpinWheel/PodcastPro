import { Upload, Bot, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Audio",
      description: "Simply send us your audio file or provide a link to your episode. We accept all major formats and handle everything from there. No complicated uploads or technical setup required."
    },
    {
      icon: Bot,
      title: "We Transcribe & Summarize",
      description: "Our AI-powered transcription service converts your audio to text with high accuracy. Then, GPT-4 generates comprehensive summaries, timestamps, and all the content you need for maximum impact."
    },
    {
      icon: Rocket,
      title: "Get Ready-to-Publish Content",
      description: "Within 2-3 business days, receive polished show notes, SEO-optimized descriptions, and social media captions. Everything is formatted and ready to copy-paste into your podcast platform."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Elevate Recap makes it effortless to get professional show notes and episode summaries. Just send us your audio, and we'll handle everything from transcription to polished content creation. Our AI-powered process is fast, accurate, and designed to save you hours of work. In just a few days, you'll have ready-to-publish materials that help your podcast look and sound more professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
