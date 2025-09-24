import { MainLayout } from "@/components/layout/MainLayout";
import { JobCard } from "@/components/jobs/JobCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Briefcase, FileText, Award } from "lucide-react";

// Mock data for demonstration
const recentJobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    postedDate: "2 days ago",
    description: "We're looking for a senior React developer to join our growing team. Experience with TypeScript, Next.js, and modern React patterns required.",
    tags: ["React", "TypeScript", "Next.js", "JavaScript"]
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Contract",
    salary: "$80k - $100k",
    postedDate: "1 week ago",
    description: "Create beautiful and intuitive user experiences for our clients. Must have strong portfolio and experience with Figma.",
    tags: ["Figma", "UI/UX", "Design", "Prototyping"]
  }
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your career journey today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications Sent</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +3 from last week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interview Invites</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                +2 from last week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certifications</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                2 in progress
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-primary hover:bg-primary-hover" asChild>
                <a href="/jobs">Find New Jobs</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/profile">Update Profile</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/applications">View Applications</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/certifications">Browse Certifications</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Jobs */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Recommended Jobs
            </h2>
            <Button variant="outline" asChild>
              <a href="/jobs">View All Jobs</a>
            </Button>
          </div>
          
          <div className="grid gap-6">
            {recentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;