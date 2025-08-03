import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Creative Studio
            </h3>
            <p className="text-background/80 text-lg mb-6 leading-relaxed">
              We're a passionate team of creatives dedicated to bringing your brand vision to life 
              through innovative design and compelling storytelling.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Copywriting</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Ad Design</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Poster Design</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Brand Strategy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@creativestudio.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;