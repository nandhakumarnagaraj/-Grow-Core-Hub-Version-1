import { 
  Home, 
  Briefcase, 
  FileText, 
  Award, 
  CreditCard, 
  User, 
  BarChart3,
  PlusCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Find Jobs', href: '/jobs', icon: Briefcase },
  { name: 'My Applications', href: '/applications', icon: FileText },
  { name: 'Post a Job', href: '/post-job', icon: PlusCircle },
  { name: 'Certifications', href: '/certifications', icon: Award },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Payments', href: '/payments', icon: CreditCard },
  { name: 'Profile', href: '/profile', icon: User },
];

export const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-background border-r border-border min-h-[calc(100vh-4rem)] shadow-card">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link key={item.name} to={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-11",
                  isActive && "bg-accent text-accent-foreground shadow-sm"
                )}
                onClick={() => onItemClick?.(item.href)}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};