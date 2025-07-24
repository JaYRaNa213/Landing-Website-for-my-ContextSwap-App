import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does ContextSwap work?",
      answer: "ContextSwap creates templates that launch multiple apps, websites, and files simultaneously. You define what tools you need for different tasks (Study, Coding, etc.) and launch them all with one click."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. ContextSwap runs entirely on your device with no cloud servers. Your templates, preferences, and usage data never leave your computer or phone."
    },
    {
      question: "Can I customize the templates?",
      answer: "Yes! You can create unlimited custom templates, modify existing ones, and even schedule them to launch automatically at specific times."
    },
    {
      question: "What platforms are supported?",
      answer: "ContextSwap is available for Windows (as a .exe file) and Android (as an .apk file). iOS and macOS versions are coming soon!"
    },
    {
      question: "Do I need an internet connection?",
      answer: "No internet required for the app to function. You only need internet to download it initially and to open web-based tools in your templates."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 data-[state=open]:bg-white/10"
            >
              <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
