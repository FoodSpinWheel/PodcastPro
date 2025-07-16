import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";

export default function Contact() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-light-gray pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have a question? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                  <a 
                    href="mailto:levi@elevaterecap.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                  >
                    levi@elevaterecap.com
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">General Inquiries</h4>
                    <a 
                      href="mailto:levi@elevaterecap.com?subject=General Inquiry"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Send Email
                    </a>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Free Trial</h4>
                    <a 
                      href="mailto:levi@elevaterecap.com?subject=Free Trial Episode Request&body=Hi, I'm interested in getting a free trial episode for my podcast."
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      Get Started
                    </a>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">15+ Episodes</h4>
                    <a 
                      href="mailto:levi@elevaterecap.com?subject=Enterprise Inquiry - 15+ Episodes&body=Hi, I'm interested in bulk pricing for 15+ episodes."
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
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
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Prefer to Call?</p>
                  <p className="text-blue-700">Email us to schedule a quick call at: 
                    <a href="mailto:levi@elevaterecap.com?subject=Schedule Call Request" className="font-semibold underline ml-1">
                      levi@elevaterecap.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}