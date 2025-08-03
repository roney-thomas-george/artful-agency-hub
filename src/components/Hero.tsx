import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-primary mr-3 animate-pulse" />
          <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
            Creative Studio
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Advertising
          </span>
          <br />
          <span className="text-foreground">
            That Inspires
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          We craft compelling copy, stunning ad designs, and eye-catching posters 
          that drive results. Meet our team of 10 creative visionaries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-gradient-hero">
            Meet The Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;