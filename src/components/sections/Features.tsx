
import { Cloud, Shield, Zap, Users, Code, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Advanced security solutions to protect your digital assets and data"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your system performance with our optimization techniques"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced collaboration tools and platforms for remote teams"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business needs"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the comprehensive suite of IT services designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
