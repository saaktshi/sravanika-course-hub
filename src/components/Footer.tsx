import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">Sravanika Academy</h3>
                <p className="text-sm text-primary-foreground/80">MSME Registered Institute</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Empowering students with quality education in languages and academic subjects. 
              Our mission is to make learning accessible and effective for everyone.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-primary-foreground/80 hover:text-accent transition-colors">All Courses</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#certification" className="text-primary-foreground/80 hover:text-accent transition-colors">Certification</a></li>
              <li><a href="#faq" className="text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@sravanikaacademy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Street<br />
                  Knowledge City, India
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              &copy; 2024 Sravanika Academy. All rights reserved. MSME Registered Institute.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-primary-foreground/60 text-xs">
              CEO: Subha.S | Authorized Signatory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;