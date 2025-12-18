"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t.faq.title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.faq.subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {t.faq.items.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === index
                                ? "border-primary shadow-lg shadow-primary/10"
                                : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span
                                    className={`font-semibold text-lg transition-colors ${openIndex === index ? "text-primary" : "text-gray-900"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${openIndex === index
                                        ? "bg-primary text-white rotate-180"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        {t.faq.contactCta}
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
                    >
                        {t.faq.contactBtn}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
