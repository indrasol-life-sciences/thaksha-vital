import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";

const supportOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance via email",
    contact: "lms-support@vital.com",
    availability: "24/7 Response"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+91 9966636305",
    availability: "Mon-Fri, 9AM-6PM"
  }
];

export function Support() {
  return (
    <section id="support" className="py-8 sm:py-section bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Need Help? We're Here for You
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our dedicated support team is ready to assist you with any questions or technical issues 
            you may encounter while using the LMS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-200 text-center">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <option.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">{option.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <p className="font-medium text-foreground text-sm sm:text-base">{option.contact}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{option.availability}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl sm:text-2xl">Quick Support Request</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                For immediate assistance, you can also submit a support ticket directly from within the LMS platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4 pt-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button variant="default" size="lg" className="text-sm sm:text-base">
                  Submit Support Ticket
                </Button>
                <Button variant="outline" size="lg" className="text-sm sm:text-base">
                  View Help Center
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Average response time: Under 2 hours during business hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}