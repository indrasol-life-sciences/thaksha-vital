import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/vital-logo.jpeg" 
                alt="Vital Corporation" 
                className="h-10 sm:h-12 w-auto"
              />
              <img 
                src="/thaksha-logo.png" 
                alt="Thaksha" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
              Empowering pharmaceutical excellence through comprehensive learning and development.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary text-xs sm:text-sm" asChild>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary text-xs sm:text-sm" asChild>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Contact</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p>Contact: support@vitalcorp.thaksha.in</p>
              <p>Internal Helpdesk Extension: 1234</p>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground text-center">
            <span>© 2025 Vital Corporation. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Powered by Thaksha (Indrasol Life Sciences)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}