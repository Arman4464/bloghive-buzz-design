
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeaturedArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  className?: string;
}

export function FeaturedArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  image,
  className,
}: FeaturedArticleCardProps) {
  return (
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
        <h2 className="text-2xl font-bold mb-3 line-clamp-2">{title}</h2>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <Button className="bg-honey-500 hover:bg-honey-600 text-foreground">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
