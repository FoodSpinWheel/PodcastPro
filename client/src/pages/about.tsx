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
                Elevate Recap was founded with a simple mission: to help podcasters focus on what they love—creating meaningful conversations—without getting bogged down in time-consuming content tasks. After seeing how much energy hosts spend transcribing, summarizing, and promoting each episode, we knew there had to be a better way. That's why we built a streamlined service combining advanced technology with experienced human editing to deliver polished, professional show notes and promotional materials faster than ever.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We work with independent creators, growing podcasts, and established brands that understand the power of consistent, high-quality content. Whether you publish a few episodes a month or release new shows daily, Elevate Recap helps you maintain a professional presence without adding extra work to your plate. Our clients range from business coaches and marketers to educators, creatives, and health experts—people who care deeply about sharing knowledge but don't want to spend hours formatting summaries and writing social posts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By blending technology efficiency with a personal touch, we deliver clear, engaging episode content you'll be proud to share. Every piece we create is designed to save you time, boost your discoverability, and help your podcast stand out in a crowded market. With Elevate Recap, you can feel confident that each episode is presented at its best, every time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team believes that great podcasts deserve great support. If you're ready to elevate your workflow and give your listeners a richer experience, we'd love to help you make it happen.
              </p>
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