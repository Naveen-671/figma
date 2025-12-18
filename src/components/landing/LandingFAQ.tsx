"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How secure is DevForge?",
        answer: "DevForge prioritizes security with industry-standard practices, including secure authentication via NextAuth, protected API routes, and encrypted data transmission. Your code and designs are safe."
    },
    {
        question: "Can I use my own AI models?",
        answer: "Yes, DevForge is model-agnostic. While we provide seamless integrations with models like GPT-4, Llama, and Gemini, the architecture is designed to support custom model endpoints in the future."
    },
    {
        question: "Is it really free and open source?",
        answer: "Absolutely. The core platform is open source. You can host it yourself, modify it, and use it for your projects without any licensing fees."
    },
    {
        question: "How does the Figma-to-Code integration work?",
        answer: "Our collaborative canvas allows you to design visually. The Vibe engine then analyzes your design structures (or imported images) and generates production-ready React/Next.js code that matches your design intent."
    },
    {
        question: "Do I need Docker for the live preview?",
        answer: "For the most robust experience, yes. The local Docker integration ensures that generated code runs in a safe, isolated container that mirrors a real production environment, handling complex dependencies automatically."
    }
];

export default function LandingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="bg-black py-vh-5 relative overflow-hidden" data-aos="fade">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-vw-5 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-xl text-secondary font-light">
                        Got Questions?
                    </span>
                    <h2 className="display-4 mt-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-secondary text-lg mt-4">
                        Everything you need to know about the platform.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-dark rounded-3xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/10"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <button
                                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-xl font-light">{faq.question}</span>
                                <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                            >
                                <p className="text-secondary leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
