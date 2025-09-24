import { 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Smart Job Matching",
    description: "Our AI-powered algorithm matches you with the perfect job opportunities based on your skills, experience, and career goals."
  },
  {
    icon: TrendingUp,
    title: "Career Growth Tracking",
    description: "Monitor your professional development with detailed analytics and insights into your career progression."
  },
  {
    icon: Shield,
    title: "Verified Companies",
    description: "All employers are thoroughly vetted to ensure legitimate opportunities and safe working environments."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant notifications about new job matches, application status updates, and interview invitations."
  },
  {
    icon: Star,
    title: "Professional Certifications",
    description: "Enhance your skills with industry-recognized certifications and boost your career prospects."
  },
  {
    icon: CheckCircle,
    title: "Application Tracking",
    description: "Keep track of all your job applications in one place with detailed status updates and feedback."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose GrowCore Hub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a job board. We're your partner in professional growth, 
            offering comprehensive tools and resources to accelerate your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};