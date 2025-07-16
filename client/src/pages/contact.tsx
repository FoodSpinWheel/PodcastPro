import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";

export default function Contact() {

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
                action="https://formspree.io/f/mvgqoqro" 
                method="POST" 
                className="space-y-6"
                onSubmit={(e) => {
                  console.log('Form submission triggered');
                  console.log('Form action:', e.currentTarget.action);
                  console.log('Form method:', e.currentTarget.method);
                }}
              >
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <select 
                  name="inquiryType" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="general">General</option>
                  <option value="billing">Billing</option>
                  <option value="enterprise">15+ Episodes</option>
                  <option value="other">Other</option>
                </select>
                <textarea 
                  name="message" 
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }}
                >
                  Send
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