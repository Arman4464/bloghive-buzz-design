
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-honey-600 dark:hover:text-honey-400 transition-colors font-medium relative nav-link-hover"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="hidden lg:flex border-honey-400 hover:border-honey-500"
            >
              Search
            </Button>
            <ThemeToggle />
            <Button className="bg-honey-500 hover:bg-honey-600 text-foreground font-medium honey-glow-hover">
              Subscribe
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground/80 hover:text-honey-600 dark:hover:text-honey-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center pt-2">
              <Button 
                variant="outline" 
                className="w-full mr-2 border-honey-400 hover:border-honey-500"
              >
                Search
              </Button>
              <Button 
                className="w-full bg-honey-500 hover:bg-honey-600 text-foreground honey-glow-hover"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
