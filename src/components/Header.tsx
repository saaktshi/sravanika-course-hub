import { Button } from "@/components/ui/button";
import { BookOpen, User, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-gradient-hero shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-accent" />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Sravanika Academy</h1>
              <p className="text-xs text-primary-foreground/80">MSME Registered Institute</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#courses" className="text-primary-foreground hover:text-accent transition-colors">Courses</a>
            <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;