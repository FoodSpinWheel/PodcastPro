import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  podcastLink: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    podcastLink: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch("https://formsubmit.co/levi@elevaterecap.com", {
        method: "POST",
        body: formDataObj
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", podcastLink: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-light-gray" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ pointerEvents: 'auto' }}>
        <div className="mb-12 text-center">
          <img
            src="/attached_assets/jonathan-farber-KVlcVi-Ulgo-unsplash_1752121673716.jpg"
            alt="Professional podcast microphone and recording equipment in a warm studio setting"
            className="w-full max-w-4xl mx-auto h-96 object-cover rounded-xl shadow-2xl mb-12"
          />
        </div>
        
        <div id="contact-form" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Elevate Your Podcast?</h2>
          <p className="text-lg text-gray-600">
            Get started with a free trial episode and see the difference professional show notes can make.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form 
              action="https://formsubmit.co/levi@elevaterecap.com" 
              method="POST" 
              className="space-y-6"
              style={{ 
                pointerEvents: 'auto',
                zIndex: 1000,
                position: 'relative'
              }}
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="New Get Started Form - Elevate Recap" />
              <input type="hidden" name="_cc" value="levi@elevaterecap.com" />
              <input type="hidden" name="_autoresponse" value="Thank you for your interest in Elevate Recap! We'll get back to you within 24 hours to discuss your podcast needs." />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    pointerEvents: 'auto',
                    zIndex: 1001,
                    position: 'relative',
                    backgroundColor: 'white',
                    cursor: 'text'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    pointerEvents: 'auto',
                    zIndex: 1001,
                    position: 'relative',
                    backgroundColor: 'white',
                    cursor: 'text'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="podcastLink" className="block text-sm font-medium text-gray-700 mb-2">Podcast Link</label>
                <input
                  type="url"
                  id="podcastLink"
                  name="podcastLink"
                  placeholder="https://your-podcast-link.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    pointerEvents: 'auto',
                    zIndex: 1001,
                    position: 'relative',
                    backgroundColor: 'white',
                    cursor: 'text'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your podcast and what you're looking for..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    pointerEvents: 'auto',
                    zIndex: 1001,
                    position: 'relative',
                    backgroundColor: 'white',
                    cursor: 'text'
                  }}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                style={{
                  pointerEvents: 'auto',
                  zIndex: 1001,
                  position: 'relative'
                }}
              >
                Get Started Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
