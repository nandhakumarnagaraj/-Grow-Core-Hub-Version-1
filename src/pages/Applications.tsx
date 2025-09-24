import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar, 
  Eye, 
  MessageSquare, 
  ExternalLink,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

// Mock application data
const applications = [
  {
    id: "1",
    jobTitle: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    appliedDate: "2024-01-15",
    status: "interview",
    statusText: "Interview Scheduled",
    salary: "$120k - $150k",
    type: "Full-time",
    interviewDate: "2024-01-25",
    notes: "Technical interview scheduled for next week. Prepare system design questions."
  },
  {
    id: "2",
    jobTitle: "Frontend Engineer",
    company: "StartupX",
    location: "New York, NY",
    appliedDate: "2024-01-10",
    status: "pending",
    statusText: "Application Under Review",
    salary: "$90k - $110k",
    type: "Full-time",
    notes: "Application submitted successfully. HR team reviewing applications."
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    company: "Innovation Labs",
    location: "Austin, TX",
    appliedDate: "2024-01-08",
    status: "accepted",
    statusText: "Offer Extended",
    salary: "$100k - $125k",
    type: "Full-time",
    notes: "Congratulations! Offer letter sent. Please review and respond by Jan 30."
  },
  {
    id: "4",
    jobTitle: "React Developer",
    company: "Web Solutions Co",
    location: "Remote",
    appliedDate: "2024-01-05",
    status: "rejected",
    statusText: "Application Declined",
    salary: "$80k - $95k",
    type: "Contract",
    notes: "Thank you for your interest. We decided to move forward with other candidates."
  },
  {
    id: "5",
    jobTitle: "UI/UX Developer",
    company: "Design Studio Pro",
    location: "Los Angeles, CA",
    appliedDate: "2024-01-12",
    status: "pending",
    statusText: "Application Submitted",
    salary: "$85k - $105k",
    type: "Full-time",
    notes: "Application recently submitted. Waiting for initial screening."
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "accepted":
      return "bg-gradient-success text-white";
    case "interview":
      return "bg-primary text-primary-foreground";
    case "pending":
      return "bg-yellow-500 text-white";
    case "rejected":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "accepted":
      return <CheckCircle className="h-4 w-4" />;
    case "interview":
      return <AlertCircle className="h-4 w-4" />;
    case "pending":
      return <Clock className="h-4 w-4" />;
    case "rejected":
      return <XCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const ApplicationCard = ({ application }: { application: any }) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {application.jobTitle}
            </h3>
            <p className="text-lg text-primary">{application.company}</p>
          </div>
          <Badge className={getStatusColor(application.status)}>
            <span className="flex items-center gap-1">
              {getStatusIcon(application.status)}
              {application.statusText}
            </span>
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {application.location}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Applied {new Date(application.appliedDate).toLocaleDateString()}
          </div>
          <span className="text-foreground font-medium">{application.salary}</span>
        </div>

        {application.interviewDate && (
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-primary">
              Interview scheduled for {new Date(application.interviewDate).toLocaleDateString()}
            </p>
          </div>
        )}

        <p className="text-muted-foreground text-sm">{application.notes}</p>

        <div className="flex justify-between items-center pt-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Job
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Applications = () => {
  const pendingApplications = applications.filter(app => app.status === "pending");
  const interviewApplications = applications.filter(app => app.status === "interview");
  const acceptedApplications = applications.filter(app => app.status === "accepted");
  const rejectedApplications = applications.filter(app => app.status === "rejected");

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Applications</h1>
          <p className="text-muted-foreground">
            Track and manage all your job applications in one place.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold">{applications.length}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold">{pendingApplications.length}</p>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold">{interviewApplications.length}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">
                    {Math.round((acceptedApplications.length / applications.length) * 100)}%
                  </p>
                </div>
                <div className="p-3 bg-gradient-success/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingApplications.length})</TabsTrigger>
            <TabsTrigger value="interview">Interviews ({interviewApplications.length})</TabsTrigger>
            <TabsTrigger value="accepted">Accepted ({acceptedApplications.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({rejectedApplications.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6">
              {applications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <div className="grid gap-6">
              {pendingApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interview" className="space-y-6">
            <div className="grid gap-6">
              {interviewApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accepted" className="space-y-6">
            <div className="grid gap-6">
              {acceptedApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-6">
            <div className="grid gap-6">
              {rejectedApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Applications;