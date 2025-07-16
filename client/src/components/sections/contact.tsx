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
              className="fs-form"
              target="_top"
              method="POST"
            >
              <div className="fs-field mb-4">
                <label className="fs-label block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                <input className="fs-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="name" name="name" />
              </div>
              <div className="fs-field mb-4">
                <label className="fs-label block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                <input className="fs-input w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="email" name="email" required />
              </div>
              <div className="fs-field mb-4">
                <label className="fs-label block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea className="fs-textarea w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="message" name="message" rows={4}></textarea>
                <p className="fs-description text-sm text-gray-500 mt-1">We usually respond within 1-2 business days.</p>
              </div>
              <div className="fs-button-group">
                <button className="fs-button w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
