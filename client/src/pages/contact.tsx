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
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdicODiZsYTGXrFVdwoG7CXnRpMilUDUnelz_6DUpnCZx-k-w/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="rounded-lg w-full"
              >
                Loading…
              </iframe>
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