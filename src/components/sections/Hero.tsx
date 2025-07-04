
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Transform Your IDEAS
            <span className="block">..with AiT Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: "0.2s"}}>
            Aroma Information Technology - Your trusted partner for cutting-edge IT enabled services, 
            digital transformation, and innovative technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock technical assistance</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Certified IT professionals at your service</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">500+ successful projects delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
