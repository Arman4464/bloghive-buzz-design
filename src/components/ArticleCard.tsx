
import { cn } from "@/lib/utils";
import { Clock, BookOpen } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  className?: string;
  readTime?: string;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  className,
  readTime = "5 min",
}: ArticleCardProps) {
  return (
    <div 
      className={cn(
        "overflow-hidden relative hover-card-animation bg-card border border-border shadow-sm",
        "flex flex-col animate-fade-in group", 
        className
      )}
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      <div className="relative h-40 w-full overflow-hidden hexagon">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-honey-500 px-2 py-0.5 rounded-full text-xs font-medium honey-glow-effect">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-honey-600 dark:group-hover:text-honey-400 transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3 flex-1">{excerpt}</p>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Clock className="h-3 w-3 mr-1" />
          <span>{readTime} read</span>
          <span className="mx-2">•</span>
          <BookOpen className="h-3 w-3 mr-1" />
          <span>124 views</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-honey-100 dark:bg-honey-900/50 flex items-center justify-center border-2 border-honey-300/30 dark:border-honey-500/30 buzz-on-hover">
            <span className="text-xs font-medium">{author.charAt(0)}</span>
          </div>
        </div>
      </div>
      
      {/* Honeycomb decoration */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 hexagon bg-honey-100 dark:bg-honey-900/20 opacity-30 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute -top-12 -left-12 w-16 h-16 hexagon bg-amber-100 dark:bg-amber-900/20 opacity-20 group-hover:opacity-50 transition-opacity"></div>
    </div>
  );
}
