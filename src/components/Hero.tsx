import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-gradient-subtle">
      <div className="container px-4 py-8 sm:py-section">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/vital-logo.jpeg" 
              alt="Vital Corporation" 
              className="h-20 sm:h-24 md:h-28 w-auto"
            />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Empower Your Growth with{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Vital Corp
              </span>{" "}
              <span className="text-red-800">
                Thaksha LMS
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Your comprehensive <strong>learning management system</strong> for onboarding, upskilling, compliance training, 
              and career development. Built exclusively for Vital Corporation employees.
            </p>
          </div>

          <div className="flex justify-center items-center pt-2 sm:pt-4">
            <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <a href="https://vitalcorp.thaksha.in/login/index.php">
                Access Your LMS
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border/50">
            <div className="flex flex-col items-center text-center space-y-3 px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Comprehensive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Access courses, compliance training, and skill development programs
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Connect with colleagues and participate in group learning activities
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 px-4 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Track Progress</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your learning journey and celebrate achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}