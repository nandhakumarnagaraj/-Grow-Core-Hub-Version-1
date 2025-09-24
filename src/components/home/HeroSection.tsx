import { Search, Briefcase, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Grow Your Career with
            <span className="block text-primary-glow">GrowCore Hub</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with top employers, enhance your skills with certifications, 
            and take your career to the next level. Your professional growth starts here.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4 p-2 bg-white rounded-lg shadow-elevated">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10 border-0 focus:ring-0 text-lg"
                />
              </div>
              <Button size="lg" className="px-8 bg-gradient-primary hover:bg-primary-hover" asChild>
                <a href="/jobs">Find Jobs</a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-primary-glow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">10K+</h3>
                <p className="text-white/90">Active Job Listings</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-primary-glow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
                <p className="text-white/90">Registered Users</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-8 w-8 text-primary-glow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
                <p className="text-white/90">Certifications Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};