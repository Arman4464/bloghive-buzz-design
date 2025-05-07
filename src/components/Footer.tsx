
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              BlogHive is a modern platform for writers and readers to connect through the power of words, ideas, and creativity.
            </p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a href="#" className="text-foreground/70 hover:text-honey-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-honey-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-honey-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-foreground/70 hover:text-honey-500 transition-colors">Home</a></li>
              <li><a href="/articles" className="text-foreground/70 hover:text-honey-500 transition-colors">Articles</a></li>
              <li><a href="/categories" className="text-foreground/70 hover:text-honey-500 transition-colors">Categories</a></li>
              <li><a href="/about" className="text-foreground/70 hover:text-honey-500 transition-colors">About</a></li>
              <li><a href="/contact" className="text-foreground/70 hover:text-honey-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Subscribe</h3>
            <p className="text-muted-foreground mb-3">Stay updated with our latest posts</p>
            <form className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-background rounded border border-input flex-1 focus:outline-none focus:ring-1 focus:ring-honey-500"
              />
              <button 
                type="submit"
                className="px-3 py-2 bg-honey-500 hover:bg-honey-600 rounded text-foreground font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} BlogHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
