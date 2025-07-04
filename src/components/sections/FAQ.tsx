
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What IT services does AiT provide?",
      answer: "AiT offers comprehensive IT solutions including cloud infrastructure, cybersecurity, custom software development, web and mobile applications, system integration, IT consulting, and 24/7 technical support."
    },
    {
      question: "How quickly can you start working on my project?",
      answer: "We typically begin new projects within 24-48 hours of contract signing. Our team will contact you immediately after your inquiry to discuss project timelines and requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, all our plans include ongoing support. Our Starter plan includes monthly maintenance, Professional plan offers 24/7 support, and Enterprise plan provides dedicated account management with priority support."
    },
    {
      question: "Can you work with our existing IT infrastructure?",
      answer: "Absolutely! We specialize in integrating with existing systems and can perform seamless migrations, upgrades, and expansions of your current IT infrastructure without disrupting your operations."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve businesses across all industries including healthcare, finance, retail, manufacturing, education, and startups. Our solutions are customized to meet specific industry requirements and compliance standards."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure access controls, regular security audits, compliance with industry standards (GDPR, HIPAA), and comprehensive backup and disaster recovery solutions."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing with three main plans: Starter ($299/month), Professional ($599/month), and Enterprise ($1,299/month). We also provide custom quotes for unique requirements and project-based pricing."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, our Professional and Enterprise plans include staff training and onboarding. We ensure your team is fully equipped to use new systems and technologies we implement."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our IT services and solutions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
