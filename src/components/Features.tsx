import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, BookOpen, Users, Clock, Download } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "20 Comprehensive Modules",
      description: "Each course contains 20 detailed modules covering all aspects of the subject"
    },
    {
      icon: CheckCircle,
      title: "Module Assessments",
      description: "Test your knowledge with assessments after each module completion"
    },
    {
      icon: Award,
      title: "Official Certification",
      description: "Receive certificates signed by CEO Subha.S from MSME registered institute"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from qualified and experienced teachers with proven track records"
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access to course materials"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "Access downloadable study materials and practice exercises"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Sravanika Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our structured approach ensures effective learning with practical application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
              <CardHeader className="pb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;