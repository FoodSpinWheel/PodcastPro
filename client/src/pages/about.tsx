import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Elevate Recap</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of podcast enthusiasts and content professionals who understand the time-consuming process of creating quality show notes and episode summaries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded by podcasters for podcasters, Elevate Recap was born from the frustration of spending countless hours on post-production content creation instead of focusing on what matters most—creating great content and growing your audience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is simple: save you time while elevating your podcast's professional presentation. We handle the detailed work so you can focus on what you do best—hosting amazing conversations and building your community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <span className="text-gray-700">Founded by experienced podcasters</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <span className="text-gray-700">Serving 200+ podcasters worldwide</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <span className="text-gray-700">Average 10+ hours saved per month</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/attached_assets/jonathan-farber-KVlcVi-Ulgo-unsplash_1752121673716.jpg"
                alt="Professional podcasting studio with microphone and equipment"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}