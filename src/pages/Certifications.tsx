import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Search, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Trophy,
  CheckCircle,
  Play,
  Calendar
} from "lucide-react";

// Mock certification data
const availableCertifications = [
  {
    id: "1",
    title: "React Professional Certification",
    provider: "Meta",
    category: "Frontend Development",
    level: "Advanced",
    duration: "40 hours",
    price: "$299",
    rating: 4.8,
    students: "12.5k",
    description: "Master advanced React concepts including hooks, context, performance optimization, and testing.",
    skills: ["React", "Hooks", "Context API", "Testing", "Performance"],
    featured: true
  },
  {
    id: "2",
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    category: "Cloud Computing",
    level: "Beginner",
    duration: "30 hours",
    price: "$199",
    rating: 4.7,
    students: "25.8k",
    description: "Learn fundamental AWS cloud concepts and services to kickstart your cloud career.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
    featured: true
  },
  {
    id: "3",
    title: "Full Stack JavaScript Developer",
    provider: "FreeCodeCamp",
    category: "Full Stack Development",
    level: "Intermediate",
    duration: "60 hours",
    price: "Free",
    rating: 4.6,
    students: "45.2k",
    description: "Complete full-stack development course covering Node.js, Express, MongoDB, and React.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
    featured: false
  },
  {
    id: "4",
    title: "Google UX Design Certificate",
    provider: "Google",
    category: "Design",
    level: "Beginner",
    duration: "50 hours",
    price: "$249",
    rating: 4.9,
    students: "18.7k",
    description: "Learn user experience design fundamentals and build a professional UX portfolio.",
    skills: ["UX Design", "Figma", "Prototyping", "User Research", "Wireframing"],
    featured: true
  },
  {
    id: "5",
    title: "Python Data Science Certification",
    provider: "DataCamp",
    category: "Data Science",
    level: "Intermediate",
    duration: "45 hours",
    price: "$179",
    rating: 4.5,
    students: "8.9k",
    description: "Master data analysis, visualization, and machine learning with Python.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    featured: false
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    provider: "CompTIA",
    category: "Security",
    level: "Beginner",
    duration: "35 hours",
    price: "$329",
    rating: 4.7,
    students: "6.3k",
    description: "Learn essential cybersecurity concepts and best practices for protecting digital assets.",
    skills: ["Security", "Network Security", "Risk Management", "Compliance"],
    featured: false
  }
];

const myCertifications = [
  {
    id: "1",
    title: "React Professional Certification",
    provider: "Meta",
    completedDate: "2023-03-15",
    expiryDate: "2025-03-15",
    status: "active",
    credentialId: "META-REACT-2023-001234",
    skills: ["React", "Hooks", "Context API", "Testing"]
  },
  {
    id: "2",
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    completedDate: "2023-01-20",
    expiryDate: "2026-01-20",
    status: "active",
    credentialId: "AWS-CP-2023-567890",
    skills: ["AWS", "Cloud Computing", "EC2", "S3"]
  }
];

const CertificationCard = ({ cert, isMyCert = false }: { cert: any, isMyCert?: boolean }) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {cert.featured && (
                <Badge className="bg-gradient-primary text-white">Featured</Badge>
              )}
              {isMyCert && cert.status === "active" && (
                <Badge className="bg-gradient-success text-white">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <p className="text-lg text-primary">{cert.provider}</p>
            {cert.category && (
              <p className="text-sm text-muted-foreground">{cert.category}</p>
            )}
          </div>
          <div className="text-right">
            {!isMyCert && (
              <p className="text-xl font-bold text-foreground">{cert.price}</p>
            )}
            {isMyCert && (
              <p className="text-sm text-muted-foreground">
                Expires: {new Date(cert.expiryDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {!isMyCert && (
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              {cert.rating}
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {cert.students} students
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {cert.duration}
            </div>
            <Badge variant="outline">{cert.level}</Badge>
          </div>
        )}

        {isMyCert && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Completed: {new Date(cert.completedDate).toLocaleDateString()}
            </div>
            <div className="text-sm text-muted-foreground">
              Credential ID: {cert.credentialId}
            </div>
          </div>
        )}

        <p className="text-muted-foreground text-sm">{cert.description}</p>

        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4">
          {!isMyCert ? (
            <>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                Learn More
              </Button>
              <Button className="bg-gradient-primary hover:bg-primary-hover">
                <Play className="h-4 w-4 mr-2" />
                Start Learning
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline">
                View Certificate
              </Button>
              <Button variant="outline">
                Share Credential
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const featuredCertifications = availableCertifications.filter(cert => cert.featured);
  const categories = [...new Set(availableCertifications.map(cert => cert.category))];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Professional Certifications</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Enhance your skills and boost your career with industry-recognized certifications 
            from top providers and institutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-muted-foreground">Certifications Available</p>
            </CardContent>
          </Card>

          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-gradient-success/10 rounded-lg w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">{myCertifications.length}</h3>
              <p className="text-muted-foreground">My Certifications</p>
            </CardContent>
          </Card>

          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-muted-foreground">Certified Professionals</p>
            </CardContent>
          </Card>
        </div>

        {/* Certification Tabs */}
        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Certifications</TabsTrigger>
            <TabsTrigger value="my-certs">My Certifications ({myCertifications.length})</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          {/* Browse Certifications Tab */}
          <TabsContent value="browse" className="space-y-6">
            {/* Search */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search certifications, providers, skills..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filter by Category</Button>
            </div>

            {/* Featured Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredCertifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>

            {/* All Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">All Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableCertifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Certifications Tab */}
          <TabsContent value="my-certs" className="space-y-6">
            {myCertifications.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {myCertifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} isMyCert={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Award className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Certifications Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your learning journey and earn your first certification.
                </p>
                <Button className="bg-gradient-primary hover:bg-primary-hover">
                  Browse Certifications
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Recommended Tab */}
          <TabsContent value="recommended" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Recommended for You</h2>
              <p className="text-muted-foreground">
                Based on your profile and career goals, here are some certifications we recommend.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {availableCertifications.slice(0, 4).map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Certifications;