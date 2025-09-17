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
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9AM-6PM"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant help through our chat system",
    contact: "Available in LMS",
    availability: "Business Hours"
  }
];

export function Support() {
  return (
    <section id="support" className="py-section bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Need Help? We're Here for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated support team is ready to assist you with any questions or technical issues 
            you may encounter while using the LMS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium text-foreground">{option.contact}</p>
                <p className="text-sm text-muted-foreground">{option.availability}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quick Support Request</CardTitle>
              <CardDescription>
                For immediate assistance, you can also submit a support ticket directly from within the LMS platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  Submit Support Ticket
                </Button>
                <Button variant="outline" size="lg">
                  View Help Center
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Average response time: Under 2 hours during business hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}