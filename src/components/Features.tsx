import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, GraduationCap, ShieldCheck, BarChart3, Calendar } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Seamless Onboarding",
    description: "Comprehensive orientation programs for new hires, ensuring smooth integration into Vital Corporation's culture and processes."
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Access to upskilling courses, professional development programs, and career advancement opportunities tailored to your role."
  },
  {
    icon: ShieldCheck,
    title: "Compliance Training",
    description: "Stay current with industry regulations, safety protocols, and company policies through mandatory and optional training modules."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Real-time analytics and reporting to monitor your learning journey, completion rates, and skill assessments."
  },
  {
    icon: Calendar,
    title: "Flexible Learning",
    description: "Self-paced learning with scheduled sessions, mobile access, and personalized learning paths that fit your schedule."
  }
];

export function Features() {
  return (
    <section id="features" className="py-section bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our LMS provides comprehensive tools and resources designed specifically for Vital Corporation's 
            learning and development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}