import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-end space-x-2">
          <img 
            src="/thaksha-logo.png" 
            alt="Thaksha" 
            className="h-12 w-auto"
          />
          <span className="text-sm text-muted-foreground font-light pb-0.5">
            by indrasol life sciences
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
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
        </nav>

        <Button variant="login" size="lg" asChild>
          <a href="https://vitalcorp.thaksha.in/login/index.php">
            Login to LMS
          </a>
        </Button>
      </div>
    </header>
  );
}