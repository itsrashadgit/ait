
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our engineering team to build scalable web applications using modern technologies.",
      requirements: ["5+ years React/Node.js experience", "Cloud platform expertise", "Strong problem-solving skills"],
      posted: "2 days ago"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Help us build and maintain robust infrastructure and deployment pipelines.",
      requirements: ["3+ years DevOps experience", "AWS/Azure expertise", "CI/CD pipeline experience"],
      posted: "1 week ago"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Protect our clients' digital assets with cutting-edge security solutions.",
      requirements: ["Security certifications", "Penetration testing experience", "Risk assessment skills"],
      posted: "3 days ago"
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Unlimited PTO policy",
    "Team building activities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Job Openings */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Current Openings</h2>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-lg mb-4">{job.description}</CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {job.posted}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
