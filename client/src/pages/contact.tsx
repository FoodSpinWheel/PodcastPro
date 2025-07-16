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
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
            
            <form 
              name="contact-page"
              method="POST" 
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-page" />
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-podcast-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Podcast Name
                  </label>
                  <input
                    type="text"
                    id="contact-podcast-name"
                    name="podcast-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your podcast name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-podcast-link" className="block text-sm font-medium text-gray-700 mb-2">
                    Podcast Episode Link
                  </label>
                  <input
                    type="url"
                    id="contact-podcast-link"
                    name="podcast-link"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://your-podcast-episode-link.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="contact-inquiry-type"
                    name="inquiry-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="free-trial">Free Trial Episode</option>
                    <option value="general">General Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="enterprise">15+ Episodes (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Tell us about your podcast and what you're looking for..."
                  />
                </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                style={{ pointerEvents: 'auto', zIndex: 1000 }}
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond within 1-2 business days.
              </p>
            </form>
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