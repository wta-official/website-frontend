import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/data";

interface FaqData {
  question: string;
  answer: string;
}

const FAQ = () => {
  return (
    <section className="px-8 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-7">
        Frequently Asked Questions
      </h2>
      <p className="text-xl lg:text-3xl mb-10">
        Find answers to the most common questions about our agency
      </p>

      <div>
        <Accordion type="single" collapsible>
          {faqData.map((qanda: FaqData, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger
                className="text-lg lg:text-4xl font-medium py-4 lg:py-6 
                 hover:no-underline
                  hover:opacity-80 focus:outline-none"
              >
                {qanda.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base lg:text-3xl leading-relaxed">
                {qanda.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
