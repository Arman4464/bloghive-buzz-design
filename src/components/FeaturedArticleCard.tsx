
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, BookOpen, MessageSquare } from "lucide-react";

interface FeaturedArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  className?: string;
  readTime?: string;
}

export function FeaturedArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  className,
  readTime = "8 min",
}: FeaturedArticleCardProps) {
  // Sample related articles
  const relatedArticles = [
    "Understanding Honeybee Communication",
    "Top 5 Blog Writing Tools for 2025",
    "How to Build an Engaged Audience"
  ];

  return (
    <div className="mb-8">
      <div 
        className={cn(
          "overflow-hidden bg-card border border-border shadow-sm hover-card-animation", 
          className
        )}
      >
        <div className="relative h-64 md:h-80 w-full overflow-hidden hexagon">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-honey-500 px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} read</span>
            <span className="mx-2">•</span>
            <BookOpen className="h-4 w-4 mr-1" />
            <span>328 views</span>
            <span className="mx-2">•</span>
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>15 comments</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-3 line-clamp-2">{title}</h2>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center mr-3 border-2 border-honey-500/40">
                <span className="font-medium">{author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium">{author}</p>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
            </div>
            <Button className="bg-honey-500 hover:bg-honey-600 text-foreground">
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-4 border border-border bg-card/50 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-2 flex items-center">
          <span className="h-2 w-4 bg-honey-500 rounded-full mr-2"></span>
          Related Articles
        </h3>
        <div className="space-y-2">
          {relatedArticles.map((article, index) => (
            <a 
              key={index} 
              href="#" 
              className="block hover:bg-background p-2 rounded-md transition-colors"
            >
              <div className="flex items-center">
                <div className="h-2 w-2 bg-honey-400 rounded-full mr-2"></div>
                <span className="text-sm">{article}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
