import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Star, Lock, Unlock } from "lucide-react";

interface Course {
  id: string;
  title: string;
  language: string;
  description: string;
  modules: number;
  duration: string;
  students: number;
  rating: number;
  price: number;
  level: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {course.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {course.level}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{course.description}</p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 mr-2" />
            {course.modules} Modules
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {course.students} Students
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="h-4 w-4 mr-2 text-accent" />
            {course.rating}/5
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Unlock className="h-4 w-4 text-success" />
            <span className="text-sm text-success font-medium">Module 1 Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Modules 2-20</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-2xl font-bold text-primary">₹{course.price}</div>
            <div className="text-sm text-muted-foreground">Full Course Access</div>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              Preview
            </Button>
            <Button className="bg-primary hover:bg-primary-hover">
              Enroll Now
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;