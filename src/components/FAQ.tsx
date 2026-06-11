
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Tinghir TV free to use?",
    answer: "Yes, Tinghir TV is completely free to download and use. We offer live matches, highlights, and news without any subscription fees."
  },
  {
    question: "How do I install the APK on my Android device?",
    answer: "Simply download the APK file from our website, tap on the file in your downloads folder, and allow 'Install from unknown sources' if prompted in your security settings."
  },
  {
    question: "What leagues are covered in the app?",
    answer: "We cover all major European leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1), as well as international tournaments like the World Cup and Champions League."
  },
  {
    question: "Does the app require high-speed internet?",
    answer: "While HD streaming works best on 4G/5G or WiFi, our adaptive streaming technology automatically adjusts quality to ensure smooth playback even on slower connections."
  },
  {
    question: "Is it safe to download the APK directly?",
    answer: "Absolutely. Our APK is scanned daily for malware and viruses. Direct download ensures you get the authentic app without third-party modifications."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Tinghir TV</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 rounded-xl border-white/5">
              <AccordionTrigger className="text-left font-headline font-bold hover:no-underline hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
