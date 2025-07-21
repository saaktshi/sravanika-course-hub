import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Master Languages & Skills with 
              <span className="text-accent block mt-2">Expert-Led Courses</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Learn Hindi, Tamil, English, Communication, and School subjects with our comprehensive 20-module courses. Get certified by MSME registered Sravanika Academy.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Try Free Module
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">1000+ Students</h3>
              <p className="text-primary-foreground/80">Trusted by learners worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">4.8/5 Rating</h3>
              <p className="text-primary-foreground/80">Excellent student feedback</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Certified</h3>
              <p className="text-primary-foreground/80">MSME registered institute</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;