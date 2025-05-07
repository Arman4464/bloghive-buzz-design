
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 hexagon bg-honey-200 dark:bg-amber-900/30 flex items-center justify-center">
              <span className="text-6xl font-bold text-honey-600 dark:text-honey-500">404</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 hexagon bg-honey-400 animate-float"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 hexagon bg-amber-400 animate-float" style={{animationDelay: "1s"}}></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't seem to exist. It might have been moved or deleted.
          </p>
          
          <Button asChild className="bg-honey-500 hover:bg-honey-600 text-foreground px-6 py-6 h-auto">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
