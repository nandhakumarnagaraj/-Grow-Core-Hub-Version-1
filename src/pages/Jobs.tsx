import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { JobCard } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Mock job data
const mockJobs = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    postedDate: "2 days ago",
    description: "We're looking for a senior React developer to join our growing team. Experience with TypeScript, Next.js, and modern React patterns required. You'll be working on cutting-edge web applications that serve millions of users.",
    tags: ["React", "TypeScript", "Next.js", "JavaScript", "AWS"]
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Design Studio Pro",
    location: "New York, NY",
    type: "Contract",
    salary: "$80k - $100k",
    postedDate: "1 week ago",
    description: "Create beautiful and intuitive user experiences for our clients. Must have strong portfolio and experience with Figma, user research, and design systems.",
    tags: ["Figma", "UI/UX", "Design", "Prototyping", "User Research"]
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Austin, TX",
    type: "Full-time", 
    salary: "$100k - $130k",
    postedDate: "3 days ago",
    description: "Join our infrastructure team to build and maintain scalable cloud solutions. Experience with Docker, Kubernetes, and CI/CD pipelines essential.",
    tags: ["Docker", "Kubernetes", "AWS", "DevOps", "CI/CD"]
  },
  {
    id: "4",
    title: "Product Manager",
    company: "StartupX",
    location: "Remote",
    type: "Full-time",
    salary: "$95k - $125k",
    postedDate: "5 days ago",
    description: "Lead product strategy and development for our innovative SaaS platform. Work with cross-functional teams to deliver exceptional user experiences.",
    tags: ["Product Management", "SaaS", "Strategy", "Analytics"]
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "AI Analytics Corp",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110k - $140k",
    postedDate: "1 week ago",
    description: "Apply machine learning and statistical analysis to solve complex business problems. PhD preferred with experience in Python, R, and deep learning.",
    tags: ["Python", "Machine Learning", "Statistics", "AI", "Deep Learning"]
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "Growth Marketing Inc",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$50k - $65k",
    postedDate: "4 days ago",
    description: "Drive digital marketing campaigns across multiple channels. Experience with SEO, content marketing, and social media required.",
    tags: ["Digital Marketing", "SEO", "Content", "Social Media", "Analytics"]
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("all");
  const [location, setLocation] = useState("all");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = jobType === "all" || job.type.toLowerCase() === jobType.toLowerCase();
    
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Dream Job</h1>
          <p className="text-muted-foreground">
            Discover opportunities that match your skills and career goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="san-francisco">San Francisco</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
                <SelectItem value="boston">Boston</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredJobs.length} of {mockJobs.length} jobs
            </p>
            <Button className="bg-gradient-primary hover:bg-primary-hover">
              Create Job Alert
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No jobs found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setJobType("all");
                  setLocation("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;