import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-end space-x-2">
          <img 
            src="/thaksha-logo.png" 
            alt="Thaksha" 
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
          <span className="text-xs sm:text-sm text-muted-foreground font-light pb-0.5 hidden sm:block">
            by indrasol life sciences
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Support
          </a>
          <Link to="/privacy-policy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>

        <Button variant="login" size="sm" className="text-xs sm:text-sm px-3 sm:px-4 py-2" asChild>
          <a href="https://vitalcorp.thaksha.in/login/index.php">
            <span className="hidden sm:inline">Login to LMS</span>
            <span className="sm:hidden">Login</span>
          </a>
        </Button>
      </div>
    </header>
  );
}