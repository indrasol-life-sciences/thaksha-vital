import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-8 sm:py-section bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Trusted Partnership
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Why Vital Corporation & Thaksha?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A powerful collaboration between industry expertise and educational innovation, 
                delivering world-class learning experiences for pharmaceutical professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Industry Leader</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Vital's pharmaceutical expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Innovation Focus</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Thaksha's learning solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Employee Centric</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Designed for your growth</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">Quality Assured</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">ISO certified processes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <Card className="shadow-elegant">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-center">
                    <img 
                      src="/thaksha-vital-logo.jpg" 
                      alt="Vital Corporation & Thaksha Partnership" 
                      className="h-16 sm:h-20 w-auto"
                    />
                  </div>
                  
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      Empowering Minds, Inspiring Futures
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Thaksha (Indrasol Life Sciences) brings cutting-edge educational technology 
                      to support Vital Corporation's commitment to employee development and excellence.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-secondary">95%</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Completion Rate</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Access</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}