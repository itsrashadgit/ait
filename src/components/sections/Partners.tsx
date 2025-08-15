
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Globe, Database, Cog, BarChart } from "lucide-react";

export const Partners = () => {
  const partnars = [
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
    <section id="partnars" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
      <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 1" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 2" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 3" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 4" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 5" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 6" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 7" className="h-12" />
              </div>
              <div className="flex justify-center items-center">
                <img src="/placeholder.svg" alt="Partner Logo 8" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};