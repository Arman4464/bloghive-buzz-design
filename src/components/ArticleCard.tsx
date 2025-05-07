
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  className,
}: ArticleCardProps) {
  return (
    <div 
      className={cn(
        "hexagon overflow-hidden relative hover-card-animation bg-card border border-border shadow-sm",
        "flex flex-col animate-hexagon-appear", 
        className
      )}
      style={{ animationDelay: `${Math.random() * 0.5}s` }}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-honey-500 px-2 py-0.5 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3 flex-1">{excerpt}</p>
        
        <div className="mt-auto">
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
    </div>
  );
}
