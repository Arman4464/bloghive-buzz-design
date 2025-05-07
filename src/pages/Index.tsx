
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedArticleCard } from "@/components/FeaturedArticleCard";
import { ArticleCard } from "@/components/ArticleCard";

// Sample data
const featuredArticle = {
  title: "The Future of Web Development: Trends to Watch in 2025",
  excerpt: "Discover the latest trends in web development that are shaping the industry. From AI-driven design to WebAssembly, these technologies are changing how we build for the web.",
  category: "Technology",
  author: "Jessica Chen",
  date: "May 5, 2025",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
};

const articles = [
  {
    title: "How Honeybees Communicate: The Dance Language",
    excerpt: "Explore the fascinating way honeybees share information about food sources through intricate dance movements.",
    category: "Nature",
    author: "David Thompson",
    date: "May 4, 2025",
    image: "https://images.unsplash.com/photo-1576800870530-6d010bc0628d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    title: "Productivity Techniques That Actually Work",
    excerpt: "These evidence-based methods will help you accomplish more without the burnout. Learn how to structure your day for maximum efficiency.",
    category: "Productivity",
    author: "Sarah Johnson",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Building Sustainable Communities",
    excerpt: "Learn about innovative approaches to urban planning that prioritize environmental sustainability and community well-being.",
    category: "Environment",
    author: "Michael Rodriguez",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "The Art of Mindful Cooking",
    excerpt: "Transform your relationship with food by bringing awareness and intention to your cooking process.",
    category: "Wellness",
    author: "Emily Wong",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Emerging Technologies in Healthcare",
    excerpt: "From AI diagnostics to nanomedicine, explore the cutting-edge innovations revolutionizing patient care and treatment.",
    category: "Health",
    author: "Dr. Robert Kim",
    date: "April 30, 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Financial Planning for Young Professionals",
    excerpt: "Start building wealth early with these strategic approaches to saving, investing, and managing debt.",
    category: "Finance",
    author: "Lisa Martinez",
    date: "April 29, 2025",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const categories = [
  { name: "Technology", count: 24, color: "bg-honey-500" },
  { name: "Nature", count: 18, color: "bg-amber-500" },
  { name: "Productivity", count: 15, color: "bg-honey-400" },
  { name: "Environment", count: 12, color: "bg-amber-400" },
  { name: "Wellness", count: 21, color: "bg-honey-300" },
  { name: "Health", count: 16, color: "bg-amber-300" },
  { name: "Finance", count: 9, color: "bg-honey-600" },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-pattern opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-honey-500 dark:from-honey-400 dark:to-amber-500 bg-clip-text text-transparent animate-pulse-slow">
                Welcome to BlogHive
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Where ideas buzz and knowledge blossoms
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-honey-500 hover:bg-honey-600 text-foreground text-lg px-6 py-6 h-auto">
                  Start Reading
                </Button>
                <Button variant="outline" className="border-honey-500 text-lg px-6 py-6 h-auto">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative hexagons */}
          <div className="absolute -top-10 -left-10 w-40 h-40 hexagon bg-honey-200 dark:bg-amber-900/20 animate-spin-slow opacity-30"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 hexagon bg-amber-200 dark:bg-honey-900/20 animate-spin-slow opacity-30" style={{ animationDirection: "reverse" }}></div>
        </section>
        
        {/* Featured Article */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="h-2 w-8 bg-honey-500 rounded-full mr-3"></span>
              Featured Article
            </h2>
            <FeaturedArticleCard {...featuredArticle} />
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="h-2 w-8 bg-honey-500 rounded-full mr-3"></span>
              Latest Articles
            </h2>
            
            <div className="hexagon-grid">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-honey-500 hover:bg-honey-600 text-foreground">
                View All Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="h-2 w-8 bg-honey-500 rounded-full mr-3"></span>
              Explore Categories
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="group p-4 bg-card rounded-lg border border-border hover:border-honey-400 transition-all flex flex-col items-center hover-card-animation"
                >
                  <div className={`${category.color} h-12 w-12 rounded-full mb-3 flex items-center justify-center`}>
                    <span className="text-xl font-bold">{category.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-honey-600 dark:group-hover:text-honey-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.count} articles</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-honey-50 to-honey-100 dark:from-amber-900/30 dark:to-amber-800/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with our latest articles, tips, and community news. Subscribe to our newsletter for weekly updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-honey-500"
              />
              <Button className="bg-honey-500 hover:bg-honey-600 text-foreground px-6 py-6 h-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
