
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { LeadGenerationModal } from "@/components/modals/LeadGenerationModal";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with IT solutions",
      features: [
        "Basic Website Development",
        "Email Setup & Configuration", 
        "Basic Security Setup",
        "Monthly Maintenance",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month", 
      description: "Ideal for growing businesses needing comprehensive IT support",
      features: [
        "Custom Web & Mobile Apps",
        "Cloud Migration & Setup",
        "Advanced Security Solutions",
        "24/7 Technical Support",
        "Monthly Strategy Sessions",
        "Performance Monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Complete IT transformation for large organizations",
      features: [
        "Full Digital Transformation",
        "Custom Software Development",
        "Dedicated Account Manager",
        "Priority 24/7 Support",
        "Advanced Analytics & BI",
        "Staff Training & Onboarding",
        "Unlimited Consultations"
      ],
      popular: false
    }
  ];

  const handleHireNow = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan that fits your business needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105' 
                  : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="h-4 w-4 mr-1" fill="currentColor" />
                  Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleHireNow(plan.name)}
                  className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  }`}
                >
                  Hire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <LeadGenerationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};
