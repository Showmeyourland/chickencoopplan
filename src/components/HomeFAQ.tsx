import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes! We offer a 30-day no questions asked return policy. If you're not completely satisfied with your chicken coop plans, simply contact us within 30 days for a full refund. No hassle, no explanations needed."
  },
  {
    question: "What's included in the chicken coop plans?",
    answer: "Each plan includes detailed step-by-step instructions, complete material lists with quantities, cut lists, 3D diagrams, and assembly guides. Many plans also include bonus features like nesting box designs and run extensions."
  },
  {
    question: "Are the plans suitable for beginners?",
    answer: "Absolutely! Our plans are designed with beginners in mind. Each plan includes difficulty ratings, estimated build times, and clear instructions that anyone with basic tools can follow."
  },
  {
    question: "What tools do I need to build a chicken coop?",
    answer: "Most of our plans require basic tools: a circular saw or miter saw, drill/driver, measuring tape, square, and level. Some advanced plans may require additional tools, which are listed in the materials section."
  },
  {
    question: "Can I modify the plans to fit my space?",
    answer: "Yes! Our plans include scaling guides so you can adjust dimensions to fit your available space. We also provide tips for customizing features like ventilation, roosting bars, and nesting boxes."
  }
];

const HomeFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-muted/30">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our chicken coop plans
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:support@buildingachickencoopplans.com" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
