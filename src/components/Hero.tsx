import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-subtle">
      <div className="container px-4 py-section">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Empower Your Growth with{" "}
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Vital Corp <span className="bg-gradient-hero bg-clip-text text-transparent">Thaksha</span> LMS
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your comprehensive <strong>learning management system</strong> for onboarding, upskilling, compliance training, 
              and career development. Built exclusively for Vital Corporation employees.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://vitalcorp.thaksha.in/login/index.php">
                Access Your LMS
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Comprehensive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Access courses, compliance training, and skill development programs
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Connect with colleagues and participate in group learning activities
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Track Progress</h3>
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