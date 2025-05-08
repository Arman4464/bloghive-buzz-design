
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data
const categories = [
  { name: "Technology", count: 24, color: "bg-honey-500" },
  { name: "Nature", count: 18, color: "bg-amber-500" },
  { name: "Productivity", count: 15, color: "bg-honey-400" },
  { name: "Environment", count: 12, color: "bg-amber-400" },
  { name: "Wellness", count: 21, color: "bg-honey-300" },
  { name: "Health", count: 16, color: "bg-amber-300" },
  { name: "Finance", count: 9, color: "bg-honey-600" },
];

const sampleArticles = [
  {
    title: "How Honeybees Communicate: The Dance Language",
    excerpt: "Explore the fascinating way honeybees share information about food sources through intricate dance movements.",
    category: "Nature",
    author: "David Thompson",
    date: "May 4, 2025",
    image: "https://images.unsplash.com/photo-1576800870530-6d010bc0628d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    readTime: "4 min"
  },
  {
    title: "Productivity Techniques That Actually Work",
    excerpt: "These evidence-based methods will help you accomplish more without the burnout. Learn how to structure your day for maximum efficiency.",
    category: "Productivity",
    author: "Sarah Johnson",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: "6 min"
  },
  {
    title: "Building Sustainable Communities",
    excerpt: "Learn about innovative approaches to urban planning that prioritize environmental sustainability and community well-being.",
    category: "Environment",
    author: "Michael Rodriguez",
    date: "May 2, 2025",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: "7 min"
  },
  {
    title: "The Art of Mindful Cooking",
    excerpt: "Transform your relationship with food by bringing awareness and intention to your cooking process.",
    category: "Wellness",
    author: "Emily Wong",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: "5 min"
  },
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter articles based on search term and active category
  const filteredArticles = sampleArticles.filter(article => {
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === null || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-muted/10 relative">
          <div className="absolute inset-0 honeycomb-pattern opacity-10"></div>
          <div className="container mx-auto max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Discover Articles by Topic
            </h1>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Browse our collection of articles by category or use the search to find specific topics that interest you
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search articles, topics, or authors..." 
                className="pl-10 pr-4 py-6 text-lg input-honey-glow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* Category Filters */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === null 
                    ? "bg-honey-500 text-foreground honey-glow-effect" 
                    : "bg-background border border-border hover:border-honey-400"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.name 
                      ? "bg-honey-500 text-foreground honey-glow-effect" 
                      : "bg-background border border-border hover:border-honey-400"
                  }`}
                >
                  {category.name} <span className="text-xs ml-1">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Articles Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="hexagon-grid">
                {filteredArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
