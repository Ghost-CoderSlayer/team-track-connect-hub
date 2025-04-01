
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Heart, 
  Apple, 
  Dumbbell, 
  MessageSquare, 
  Users,
  User
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Health", icon: Heart, href: "/health" },
  { name: "Nutrition", icon: Apple, href: "/nutrition" },
  { name: "Training", icon: Dumbbell, href: "/training" },
  { name: "Team Chat", icon: MessageSquare, href: "/chat" },
  { name: "Coach View", icon: Users, href: "/coach" },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Side Navigation */}
      <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-4 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-primary">Team Track</h1>
          <p className="text-sidebar-foreground/70 text-sm">Connect & Perform</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">John Smith</p>
              <p className="text-xs text-sidebar-foreground/70">Basketball Player</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
