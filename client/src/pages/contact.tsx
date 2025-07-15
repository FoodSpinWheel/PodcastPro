import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Check for URL parameters to auto-select inquiry type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inquiryParam = urlParams.get('inquiry');
    if (inquiryParam === 'enterprise') {
      setFormData(prev => ({ ...prev, inquiryType: 'enterprise' }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
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
          description: "Your message has been sent. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", inquiryType: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
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

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-light-gray pt-32" style={{ pointerEvents: 'auto' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ pointerEvents: 'auto' }}>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have a question? We're here to help. Send us a message and we'll respond as soon as possible.
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
                <input type="hidden" name="_subject" value="New Contact Form Submission - Elevate Recap" />
                <input type="hidden" name="_cc" value="levi@elevaterecap.com" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Elevate Recap! We'll get back to you within 24 hours." />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <select 
                    id="inquiryType" 
                    name="inquiryType" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    style={{
                      pointerEvents: 'auto',
                      zIndex: 1001,
                      position: 'relative',
                      backgroundColor: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="general">General</option>
                    <option value="billing">Billing</option>
                    <option value="enterprise">15+ Episodes</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please describe your question or concern in detail..."
                    required
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
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM MST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}