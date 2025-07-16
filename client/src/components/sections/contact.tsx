export default function Contact() {

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
              action="https://formspree.io/f/mvgqoqro" 
              method="POST" 
              className="space-y-6"
              onSubmit={(e) => {
                console.log('Home form submission triggered');
                console.log('Form action:', e.currentTarget.action);
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
              <textarea 
                name="message" 
                placeholder="Your message"
                rows={4}
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
                Get Free Trial Episode
              </button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-blue-50 p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-blue-700">
                <strong>Form not working?</strong> Email us directly: 
                <a href="mailto:levi@elevaterecap.com" className="font-semibold underline ml-1">
                  levi@elevaterecap.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
