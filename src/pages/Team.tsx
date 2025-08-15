
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rashadul Islam",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "With over 15 years in IT leadership, Sarah drives our vision for innovative technology solutions.",
      linkedin: "#",
      twitter: "#",
      email: "info@aromait.com"
    },
    {
      name: "Mozammel Haque",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Michael leads our technical team with expertise in cloud architecture and cybersecurity.",
      linkedin: "#",
      twitter: "#",
      email: "info@aromait.com"
    },
    {
      name: "Rabiul Hasan Rahat",
      role: "Application Developer",
      image: "/placeholder.svg",
      bio: "Emily oversees our development projects with a focus on quality and client satisfaction.",
      linkedin: "#",
      twitter: "#",
      email: "emily@aromait.com"
    },
    {
      name: "Alamgir Hosen",
      role: "SEO & Digital Marketing",
      image: "/placeholder.svg",
      bio: "David ensures our systems run smoothly with his expertise in automation and infrastructure.",
      linkedin: "#",
      twitter: "#",
      email: "david@aromait.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented professionals who make AiT a leader in IT solutions and services.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Mail className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;