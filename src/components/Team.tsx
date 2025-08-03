import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Instagram, Linkedin, Globe } from "lucide-react";

const designers = [
  {
    name: "Roney Thomas",
    role: "Creative Director",
    skills: ["Brand Strategy", "Art Direction", "Typography"],
    bio: "Leading creative vision with 8+ years in advertising design.",
    portfolio: "https://sarahchen.design",
    social: { instagram: "@sarahchen_design", linkedin: "sarah-chen-creative" }
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Copywriter",
    skills: ["Campaign Copy", "Brand Voice", "Content Strategy"],
    bio: "Award-winning copywriter crafting compelling brand narratives.",
    portfolio: "https://marcuswords.com",
    social: { instagram: "@marcus_writes", linkedin: "marcus-rodriguez-copy" }
  },
  {
    name: "Elena Vasquez", 
    role: "Visual Designer",
    skills: ["Digital Design", "Illustration", "Motion Graphics"],
    bio: "Creating stunning visuals that bring brands to life.",
    portfolio: "https://elenadesigns.co",
    social: { instagram: "@elena_visuals", linkedin: "elena-vasquez-design" }
  },
  {
    name: "David Kim",
    role: "Art Director",
    skills: ["Print Design", "Poster Art", "Visual Identity"],
    bio: "Specializing in bold poster designs and visual storytelling.",
    portfolio: "https://davidkim.art",
    social: { instagram: "@davidkim_art", linkedin: "david-kim-creative" }
  },
  {
    name: "Aisha Patel",
    role: "Digital Designer",
    skills: ["UI/UX", "Web Design", "Social Media"],
    bio: "Digital-first designer creating engaging online experiences.",
    portfolio: "https://aishadesign.studio",
    social: { instagram: "@aisha_digital", linkedin: "aisha-patel-design" }
  },
  {
    name: "James Wilson",
    role: "Brand Designer",
    skills: ["Logo Design", "Brand Identity", "Packaging"],
    bio: "Building memorable brands through thoughtful design systems.",
    portfolio: "https://jameswilson.brand",
    social: { instagram: "@james_brands", linkedin: "james-wilson-brand" }
  },
  {
    name: "Maya Singh",
    role: "Content Creator",
    skills: ["Photography", "Video", "Social Content"],
    bio: "Capturing authentic moments that connect brands with people.",
    portfolio: "https://mayasingh.photo",
    social: { instagram: "@maya_captures", linkedin: "maya-singh-photo" }
  },
  {
    name: "Alex Thompson",
    role: "Graphic Designer",
    skills: ["Print Media", "Editorial", "Infographics"],
    bio: "Transforming complex ideas into clear, beautiful designs.",
    portfolio: "https://alexthompson.graphics",
    social: { instagram: "@alex_graphics", linkedin: "alex-thompson-design" }
  },
  {
    name: "Zoe Martinez",
    role: "Creative Writer",
    skills: ["Storytelling", "Script Writing", "Brand Messaging"],
    bio: "Weaving stories that resonate and inspire action.",
    portfolio: "https://zoemartinez.writes",
    social: { instagram: "@zoe_stories", linkedin: "zoe-martinez-writer" }
  },
  {
    name: "Ryan Foster",
    role: "Senior Designer",
    skills: ["Campaign Design", "Creative Strategy", "Team Lead"],
    bio: "Leading creative campaigns that deliver exceptional results.",
    portfolio: "https://ryanfoster.creative",
    social: { instagram: "@ryan_creates", linkedin: "ryan-foster-creative" }
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Creative Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ten talented designers, each bringing unique skills and perspectives to create 
            extraordinary work that pushes creative boundaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designers.map((designer, index) => (
            <Card 
              key={designer.name} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {designer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{designer.name}</h3>
                  <p className="text-primary font-medium mb-3">{designer.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{designer.bio}</p>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {designer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <Button size="sm" variant="outline" className="p-2" asChild>
                    <a href={designer.portfolio} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="p-2" asChild>
                    <a href={`https://instagram.com/${designer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="p-2" asChild>
                    <a href={`https://linkedin.com/in/${designer.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;