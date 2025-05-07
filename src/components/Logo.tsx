
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        {/* Honeycomb structure */}
        <div className="relative flex">
          {/* First hexagon with "B" */}
          <div className="h-10 w-10 hexagon bg-gradient-to-br from-honey-300 to-amber-400 shadow-md flex items-center justify-center border-2 border-honey-500/40">
            <span className="text-amber-900 dark:text-amber-900 font-bold text-sm">B</span>
          </div>
          
          {/* Second hexagon with "H" - slightly offset */}
          <div className="h-10 w-10 hexagon bg-gradient-to-br from-amber-400 to-honey-300 shadow-md flex items-center justify-center -ml-3 border-2 border-honey-500/40">
            <span className="text-amber-900 dark:text-amber-900 font-bold text-sm">H</span>
          </div>
          
          {/* Decorative smaller honeycomb cells */}
          <div className="absolute -top-2 -right-1 h-5 w-5 hexagon bg-honey-200 border border-honey-400/30 opacity-80"></div>
          <div className="absolute bottom-0 -left-1 h-4 w-4 hexagon bg-honey-200 border border-honey-400/30 opacity-80"></div>
        </div>
        
        {/* Animated bees */}
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-800 animate-float" />
        <div className="absolute bottom-0 -left-1 h-2 w-2 rounded-full bg-amber-800 animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      {withText && (
        <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-honey-500 dark:from-honey-400 dark:to-amber-500 bg-clip-text text-transparent">
          BlogHive
        </span>
      )}
    </div>
  );
}
