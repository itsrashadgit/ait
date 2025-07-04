
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Globe, Database, Cog, BarChart } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Secure Coding"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Performance", "Cross-Platform", "App Store Ready", "Push Notifications"]
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data storage, backup, and analytics solutions",
      features: ["Cloud Storage", "Data Backup", "Analytics", "Security"]
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Seamless integration of various business systems and applications",
      features: ["API Integration", "Automation", "Workflow", "Optimization"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transform your data into actionable business insights",
      features: ["Data Visualization", "Reporting", "Predictive Analytics", "Dashboard"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business objectives and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden group"
              >
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
