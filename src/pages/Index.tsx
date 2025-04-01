import React from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Dumbbell, Heart, Apple, LayoutDashboard, MessageSquare, Users } from "lucide-react";

const features = [
  {
    title: "Training & Performance",
    description: "Track workouts, set goals, and monitor progress with real-time analytics.",
    icon: Dumbbell,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Health Monitoring",
    description: "Monitor heart rate, sleep quality, recovery status, and injury prevention metrics.",
    icon: Heart,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Nutrition Management",
    description: "Track calories, macros, and hydration with personalized meal recommendations.",
    icon: Apple,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Team Chat & Communication",
    description: "Connect with coaches and teammates in real-time through our integrated messaging platform.",
    icon: MessageSquare,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Coach Dashboard",
    description: "Comprehensive overview of team and individual athlete performance metrics.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500",
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Team Track</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {features.slice(0, 4).map((feature) => (
                      <div key={feature.title} className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1.5 rounded-full ${feature.color}`}>
                            <feature.icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium">{feature.title}</span>
                        </div>
                        <p className="line-clamp-2 text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
                  Dashboard
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              Log In
            </Button>
            <Button onClick={() => navigate('/dashboard')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-background to-slate-50 dark:to-slate-950/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Elevate Athletic Performance
              </h1>
              <p className="text-xl text-muted-foreground">
                The all-in-one platform for athletes, teams, and coaches to track health, 
                nutrition, training, and collaborate in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/dashboard')}>
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
                  Take a Tour
                </Button>
              </div>
              <div className="flex items-center pt-4 text-sm text-muted-foreground">
                <span>Trusted by professional teams and athletes worldwide</span>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4 p-6 relative z-10">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-lg shadow-sm flex flex-col hover:scale-105 transition-transform"
                  >
                    <div className={`p-2 rounded-full ${feature.color} w-fit`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium mt-2">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description.substring(0, 60)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Complete Athlete Management</h2>
            <p className="text-muted-foreground mt-2">
              Everything you need to optimize performance and wellness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-background rounded-xl p-6 shadow-sm border flex flex-col hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-full ${feature.color} w-fit`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mt-4">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 flex-1">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  className="mt-4 self-start" 
                  onClick={() => navigate('/dashboard')}
                >
                  Learn more
                  <span className="ml-2">→</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to take your team to the next level?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of teams and athletes who are optimizing performance, 
            health, and teamwork with Team Track.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => navigate('/dashboard')}
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Team Track</h3>
              <p className="text-slate-400">
                The complete platform for athletic performance tracking and team management.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {feature.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Team Track. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
