import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleGetStarted = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-blue-800 text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Show Notes & Episode Summaries—Done For You
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Save hours every month. Get polished podcast summaries, timestamps, SEO descriptions, and social captions—fast.
            </p>
            <Button
              onClick={handleGetStarted}
              className="bg-accent text-white px-8 py-4 text-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
              size="lg"
            >
              Get a Free Trial Episode
            </Button>
          </div>
          <div className="hidden lg:block">
            <img
              src="@assets/austin-distel-VCFxt2yT1eQ-unsplash_1752120368045.jpg"
              alt="Professional podcast recording studio setup"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
