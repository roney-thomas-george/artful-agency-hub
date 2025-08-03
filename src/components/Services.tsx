import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Image, FileText } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Copywriting",
    description: "Compelling content that converts. From taglines to long-form copy, we craft words that resonate with your audience and drive action.",
    features: ["Brand Messaging", "Ad Copy", "Content Strategy", "SEO Optimization"]
  },
  {
    icon: Image,
    title: "Ad Design",
    description: "Eye-catching advertisements across all platforms. We create visual narratives that capture attention and communicate your brand's essence.",
    features: ["Digital Ads", "Print Campaigns", "Social Media", "Display Advertising"]
  },
  {
    icon: PenTool,
    title: "Poster Design",
    description: "Bold poster designs that make an impact. From promotional materials to artistic statements, we design posters that stand out.",
    features: ["Event Posters", "Product Promotion", "Brand Awareness", "Typography Design"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of creative services designed to elevate your brand 
            and connect with your audience in meaningful ways.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-500 border-2 hover:border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;