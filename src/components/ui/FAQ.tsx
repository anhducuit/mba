
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Câu hỏi thường gặp" }) => {
    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {title}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border rounded-lg px-4 bg-white shadow-sm"
                    >
                        <AccordionTrigger className="text-left font-semibold text-mba-primary hover:text-mba-secondary hover:no-underline py-4">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
