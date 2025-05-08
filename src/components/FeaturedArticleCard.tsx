
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
          "overflow-hidden bg-card border border-border shadow-sm hover-card-animation group", 
          className
        )}
      >
        <div className="relative h-56 sm:h-64 md:h-80 w-full overflow-hidden hexagon">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-honey-500 px-3 py-1 rounded-full text-sm font-medium honey-glow-effect">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-2 gap-2 sm:gap-0">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime} read</span>
            </div>
            <span className="hidden sm:inline-block mx-2">•</span>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>328 views</span>
            </div>
            <span className="hidden sm:inline-block mx-2">•</span>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>15 comments</span>
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-honey-600 dark:group-hover:text-honey-400 transition-colors">{title}</h2>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-amber-200 dark:bg-amber-900/50 flex items-center justify-center mr-3 border-2 border-honey-500/40 buzz-on-hover">
                <span className="font-medium">{author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium">{author}</p>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
            </div>
            <Button className="bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover w-full sm:w-auto">
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-4 border border-border bg-card/50 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-2 flex items-center">
          <span className="h-2 w-4 bg-honey-500 rounded-full mr-2 bee-float"></span>
          Related Articles
        </h3>
        <div className="space-y-2">
          {relatedArticles.map((article, index) => (
            <a 
              key={index} 
              href="#" 
              className="block hover:bg-background p-2 rounded-md transition-colors group/article"
            >
              <div className="flex items-center">
                <div className="h-2 w-2 bg-honey-400 rounded-full mr-2 group-hover/article:bg-honey-500 group-hover/article:animate-pulse transition-colors"></div>
                <span className="text-sm group-hover/article:text-honey-600 dark:group-hover/article:text-honey-400 transition-colors">{article}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
