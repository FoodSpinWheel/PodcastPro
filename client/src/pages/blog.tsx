import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { useLocation } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export default function Blog() {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    // Navigate to homepage first
    setLocation("/");
    
    // Then scroll to the contact form specifically after a brief delay to ensure page loads
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        // Fallback to contact section if form ID not found
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, 200);
  };

  const blogPost: BlogPost = {
    id: "1",
    title: "5 Essential Elements Every Podcast Show Notes Should Include (With Examples)",
    excerpt: "Podcast show notes are more than just a summary — they're a powerful SEO tool, a listener guide, and a content marketing asset all rolled into one.",
    content: `🎙️ 5 Essential Elements Every Podcast Show Notes Should Include (With Examples)

Podcast show notes are more than just a summary — they're a powerful SEO tool, a listener guide, and a content marketing asset all rolled into one. Whether you're a seasoned podcaster or just launching your first episode, crafting strategic show notes can significantly improve your discoverability, engagement, and listener retention.

In this post, we'll break down the five essential elements every podcast show notes should include — with tips to help you stand out in search and serve your audience better.

⸻

## 1. 🎯 Compelling Episode Summary

**Why it matters:** A strong summary helps potential listeners quickly grasp what the episode is about and why they should tune in. This is also where search engines look first for relevant keywords.

**What to include:**
• The core topic or takeaway
• Who the guest is and their expertise
• A teaser or hook (e.g. "You won't believe what happened at minute 14!")

**SEO Tip:** Use target keywords naturally in the first 1–2 sentences. For example, if your podcast is about entrepreneurship, include terms like "startup strategies", "founder insights", or "business growth tips".

**Example:**
*In this episode, we sit down with marketing strategist Jane Doe to uncover 7 proven growth hacks for early-stage startups. From building an audience with zero budget to leveraging LinkedIn for lead gen, you'll walk away with actionable tactics you can implement today.*

⸻

## 2. 📝 Timestamps for Key Moments

**Why it matters:** Timestamps improve the user experience by letting listeners jump to the parts that matter most. They also increase engagement and dwell time — a win for SEO.

**What to include:**
• A breakdown of major topics covered
• Specific time markers (e.g. 04:45 – How to pitch investors)

**Bonus:** Timestamps make your content easier to repurpose (like turning segments into short videos or blog snippets).

**Example:**
⏱️ 02:10 – Jane's journey from agency life to startup founder
⏱️ 08:45 – The biggest mistake new marketers make
⏱️ 14:20 – How to build an email list with no budget

⸻

## 3. 🔗 Relevant Links & Resources

**Why it matters:** Links provide value to your audience, boost authority, and can improve search rankings through internal and external linking.

**What to include:**
• Tools, books, or websites mentioned
• Guest's website or social profiles
• Internal links to related episodes or blog posts

**SEO Tip:** Link to high-authority sources, and always include internal links to keep visitors on your site longer.

**Example:**
📚 Resources mentioned:
– ConvertKit – Email marketing tool
– Episode 12: How to Build a Content Calendar

⸻

## 4. 👤 Guest Bio or Host Highlights

**Why it matters:** Featuring a guest bio adds credibility and helps listeners understand why they should care. For solo shows, highlight the host's expertise or personal story.

**What to include:**
• Guest's background and relevant achievements
• Social media handles or a headshot
• For solo episodes, a brief host intro with authority-building info

**SEO Tip:** Include keywords like "interview with [industry expert]" or "featuring [guest's name]" to help search engines index your episode properly.

**Example:**
*Jane Doe is a growth marketing expert and founder of ScaleUp.io. She's helped over 200 startups hit six-figure revenues and is known for her no-BS growth tactics.*

⸻

## 5. 📥 Clear Call-to-Action (CTA)

**Why it matters:** You've captured attention — now tell your audience what to do next. CTAs turn passive listeners into engaged followers, subscribers, or buyers.

**What to include:**
• Subscribe, rate & review prompt
• Newsletter or free resource opt-in
• Link to premium content, courses, or offers

**SEO Tip:** Use CTA keywords like "download," "subscribe," or "join" to help attract and convert search traffic.

**Example:**
*🔔 Enjoyed this episode? Be sure to subscribe on Spotify and leave a review on Apple Podcasts. Want the full show notes and bonus content? Join our free newsletter.*

⸻

## Final Thoughts

Great show notes do more than summarize — they convert, optimize, and scale your podcast's reach.

By including these five essential elements:
1. A compelling summary
2. Timestamps
3. Links and resources
4. Guest or host bios
5. Clear CTAs

…you'll not only improve SEO, but also create a better experience for your listeners — and ultimately grow your podcast faster.`,
    author: "Elevate Recap Team",
    date: "2025-01-16",
    readTime: "8 min read",
    category: "Best Practices",
    image: "/attached_assets/pexels-magda-ehlers-pexels-1054713_1752120368045.jpg"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Podcast Growth Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you grow your podcast audience and create better content.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Article Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {blogPost.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
              {blogPost.content}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-accent/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Elevate Your Podcast?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get professional show notes that follow these best practices. Start with a free trial episode today.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Get Your Free Trial Episode
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}