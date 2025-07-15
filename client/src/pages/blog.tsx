import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

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
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "5 Essential Elements Every Podcast Show Notes Should Include",
      excerpt: "Learn the key components that make show notes effective for both listeners and search engines, helping your podcast reach a wider audience.",
      content: "",
      author: "Elevate Recap Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Best Practices",
      image: "/attached_assets/jonathan-farber-KVlcVi-Ulgo-unsplash_1752121673716.jpg"
    },
    {
      id: "2", 
      title: "How Professional Show Notes Can Double Your Podcast Downloads",
      excerpt: "Discover how well-crafted show notes improve discoverability, listener engagement, and help convert casual browsers into dedicated subscribers.",
      content: "",
      author: "Elevate Recap Team",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Growth",
      image: "/attached_assets/austin-distel-VCFxt2yT1eQ-unsplash_1752120820192.jpg"
    },
    {
      id: "3",
      title: "The Ultimate Guide to Podcast SEO: Getting Found in 2024",
      excerpt: "Master the art of podcast SEO with actionable strategies that help your content rank higher and attract organic listeners through search.",
      content: "",
      author: "Elevate Recap Team", 
      date: "2024-01-10",
      readTime: "10 min read",
      category: "SEO",
      image: "/attached_assets/kit-formerly-convertkit-waxDxYM2XI4-unsplash_1752120368045.jpg"
    },
    {
      id: "4",
      title: "Time-Saving Tools Every Podcaster Should Know About",
      excerpt: "Streamline your podcast workflow with these essential tools and services that help you focus on creating great content instead of tedious tasks.",
      content: "",
      author: "Elevate Recap Team",
      date: "2024-01-08",
      readTime: "6 min read", 
      category: "Tools",
      image: "/attached_assets/pexels-magda-ehlers-pexels-1054713_1752120368045.jpg"
    },
    {
      id: "5",
      title: "Creating Compelling Social Media Content from Your Podcast Episodes",
      excerpt: "Transform your podcast content into engaging social media posts that drive traffic back to your episodes and grow your audience.",
      content: "",
      author: "Elevate Recap Team",
      date: "2024-01-05", 
      readTime: "8 min read",
      category: "Social Media",
      image: "/attached_assets/pexels-jean-balzan-210755-682082_1752120368045.jpg"
    },
    {
      id: "6",
      title: "Why Timestamps Matter: Making Your Podcast More Accessible",
      excerpt: "Learn how detailed timestamps improve user experience, accessibility, and help listeners find exactly what they're looking for in your episodes.",
      content: "",
      author: "Elevate Recap Team",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "Accessibility",
      image: "/attached_assets/austin-distel-VCFxt2yT1eQ-unsplash_1752120368045.jpg"
    }
  ];

  const categories = ["All", "Best Practices", "Growth", "SEO", "Tools", "Social Media", "Accessibility"];

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

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  category === "All" 
                    ? "bg-accent text-white hover:bg-accent/90" 
                    : "hover:bg-accent hover:text-white"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-accent/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Stay Updated with Podcast Tips
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly insights on podcast growth, content creation, and industry trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}