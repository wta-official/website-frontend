// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { faqData } from "@/data/data";

// interface FaqData {
//   question: string;
//   answer: string;
// }

// const FAQ = () => {
//   return (
//     <section className="px-6 sm:px-8 lg:px-16">
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
//         Frequently Asked Questions
//       </h2>
//       <p className="text-lg sm:text-xl lg:text-2xl mb-8">
//         Find answers to the most common questions about our agency
//       </p>

//       <div>
//         <Accordion type="single" collapsible>
//           {faqData.map((qanda: FaqData, index) => (
//             <AccordionItem key={index} value={`item-${index + 1}`}>
//               <AccordionTrigger
//                 className="text-base sm:text-lg lg:text-xl font-medium py-3 sm:py-4 lg:py-5
//                 hover:no-underline hover:opacity-80 focus:outline-none"
//               >
//                 {qanda.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
//                 {qanda.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
