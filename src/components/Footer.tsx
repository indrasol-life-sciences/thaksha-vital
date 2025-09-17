import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/vital-logo.jpeg" 
                alt="Vital Corporation" 
                className="h-12 w-auto"
              />
              <img 
                src="/thaksha-logo.png" 
                alt="Thaksha" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering pharmaceutical excellence through comprehensive learning and development.
            </p>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Terms of Service
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Contact: support@vitalcorp.thaksha.in</p>
              <p>Internal Helpdesk Extension: 1234</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2025 Vital Corporation. All rights reserved.</span>
            <span>•</span>
            <span>Powered by Thaksha (Indrasol Life Sciences)</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="login" size="sm" asChild>
              <a href="https://vitalcorp.thaksha.in/login/index.php">
                Employee Login
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}