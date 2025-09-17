import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, BookOpen, Award } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: LogIn,
    title: "Login & Access",
    description: "Use your Vital Corporation credentials to securely access the LMS platform. Your personalized dashboard awaits with curated content."
  },
  {
    step: "02", 
    icon: BookOpen,
    title: "Explore & Learn",
    description: "Browse through courses, training modules, and resources. Engage with interactive content, videos, assessments, and collaborative activities."
  },
  {
    step: "03",
    icon: Award,
    title: "Track & Achieve",
    description: "Monitor your progress, earn certifications, and celebrate milestones. Build your professional portfolio with documented achievements."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-section bg-gradient-subtle">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Getting Started is Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these three easy steps to begin your learning journey with Vital Corp Thaksha LMS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-200 relative">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-hero transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}