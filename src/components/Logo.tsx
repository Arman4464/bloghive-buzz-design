
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        {/* Hexagon base */}
        <div className="h-10 w-10 hexagon bg-gradient-to-br from-honey-400 to-amber-500 shadow-md flex items-center justify-center">
          {/* Inner honeycomb pattern */}
          <div className="h-7 w-7 hexagon bg-honey-300/50 dark:bg-honey-300/80 flex items-center justify-center">
            {/* "B" letter */}
            <span className="text-amber-900 dark:text-amber-900 font-bold">B</span>
          </div>
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
