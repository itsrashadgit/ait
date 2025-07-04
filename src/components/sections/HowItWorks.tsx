
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Wrench, Rocket } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Consultation",
      description: "We start with understanding your business needs and technical requirements through detailed consultation sessions."
    },
    {
      icon: Search,
      step: "02", 
      title: "Analysis & Planning",
      description: "Our experts analyze your current systems and create a comprehensive strategy tailored to your goals."
    },
    {
      icon: Wrench,
      step: "03",
      title: "Development & Implementation",
      description: "We build and implement solutions using cutting-edge technologies and industry best practices."
    },
    {
      icon: Rocket,
      step: "04",
      title: "Launch & Support",
      description: "After successful deployment, we provide ongoing support and maintenance to ensure optimal performance."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures successful delivery of your IT projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-blue-100">
                  {step.step}
                </div>
                <CardHeader className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {step.description}
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
