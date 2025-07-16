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
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Ready to transform your podcast with professional show notes?
              </p>
              <p className="text-gray-600">
                Contact us to get started with your free trial episode:
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:levi@elevaterecap.com?subject=Free Trial Episode Request&body=Hi, I'm interested in getting a free trial episode for my podcast. Please let me know the next steps."
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Get Free Trial Episode
              </a>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> levi@elevaterecap.com<br/>
                  <strong>Response Time:</strong> 1-2 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
