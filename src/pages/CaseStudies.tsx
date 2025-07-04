
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Shield } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Legacy system migration and performance optimization",
      solution: "Cloud migration with microservices architecture",
      results: [
        "300% improvement in page load times",
        "99.9% uptime achieved",
        "50% reduction in operational costs"
      ],
      technologies: ["AWS", "React", "Node.js", "MongoDB"],
      icon: TrendingUp
    },
    {
      title: "Healthcare Data Security Enhancement",
      client: "MedSecure Inc.",
      industry: "Healthcare",
      challenge: "HIPAA compliance and data security implementation",
      solution: "End-to-end encryption and security audit system",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches",
        "40% faster data processing"
      ],
      technologies: ["Cybersecurity", "Encryption", "Audit Tools", "Compliance"],
      icon: Shield
    },
    {
      title: "Enterprise Collaboration Platform",
      client: "GlobalCorp Ltd.",
      industry: "Enterprise",
      challenge: "Remote team collaboration and productivity",
      solution: "Custom collaboration platform with real-time features",
      results: [
        "80% increase in team productivity",
        "Seamless remote work transition",
        "25% reduction in meeting time"
      ],
      technologies: ["React", "WebRTC", "Socket.io", "PostgreSQL"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with innovative IT solutions.
            </p>
          </section>

          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                          <CardDescription className="text-lg">
                            <span className="font-semibold">{study.client}</span> • {study.industry}
                          </CardDescription>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Results</h4>
                        <ul className="text-gray-600 space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
