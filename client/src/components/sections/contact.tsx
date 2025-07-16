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
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Ready to transform your podcast with professional show notes?
              </p>
            </div>
            
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
      </div>
    </section>
  );
}
