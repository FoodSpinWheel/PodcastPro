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
    <section id="contact" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_subject" value="New Get Started Form - Elevate Recap" />
                <input type="hidden" name="_cc" value="levi@elevaterecap.com" />
                <input type="hidden" name="_autoresponse" value="Thank you for your interest in Elevate Recap! We'll get back to you within 24 hours to discuss your podcast needs." />
                
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                <div>
                  <Label htmlFor="podcastLink">Podcast Link</Label>
                  <Input
                    id="podcastLink"
                    name="podcastLink"
                    type="url"
                    value={formData.podcastLink}
                    onChange={handleChange}
                    placeholder="https://your-podcast-link.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your podcast and what you're looking for..."
                    className="mt-2"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-white hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Started Free"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
