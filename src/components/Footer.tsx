import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/vital-logo.jpeg" 
                alt="Vital Corporation" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering pharmaceutical excellence through comprehensive learning and development.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Login to LMS
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Course Catalog
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Support Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Employee Portal
                </Button>
              </li>
            </ul>
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
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Compliance
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Vital Corporation</p>
              <p>Learning & Development</p>
              <p>lms-support@vital.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 Vital Corporation. All rights reserved.</span>
            <span>•</span>
            <span>Powered by Thaksha (Indrasol Life Sciences)</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="login" size="sm">
              Employee Login
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}