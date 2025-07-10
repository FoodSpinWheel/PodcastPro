export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Elevate Recap</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Elevate Recap was founded by podcasters who understand the time-consuming challenge of creating professional show notes and episode summaries. After spending countless hours writing, editing, and formatting content for our own shows, we realized there had to be a better way.
              </p>
              <p>
                We help busy podcasters, content creators, and media professionals save time while maintaining the high-quality standards their audience expects. Our AI-powered process combines cutting-edge technology with human oversight to deliver polished, professional content that enhances your podcast's discoverability and engagement.
              </p>
              <p>
                Whether you're a solo podcaster juggling multiple responsibilities or a media company managing several shows, Elevate Recap takes the content creation burden off your plate. We've helped hundreds of podcasters reclaim their time and focus on what they do best—creating amazing content and growing their audience.
              </p>
              <p>
                Our mission is simple: to help every podcaster look and sound more professional while saving them hours of work each month. With our dedicated team and proven process, you can trust that your content is in expert hands.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern content creation workspace"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
