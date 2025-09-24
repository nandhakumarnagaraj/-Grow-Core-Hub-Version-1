import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedDate: string;
    description: string;
    tags: string[];
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-lg text-muted-foreground mt-1">{job.company}</p>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {job.type}
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            {job.salary}
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-3">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4">
          <span className="text-sm text-muted-foreground">
            Posted {job.postedDate}
          </span>
          <Button className="bg-gradient-primary hover:bg-primary-hover">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};