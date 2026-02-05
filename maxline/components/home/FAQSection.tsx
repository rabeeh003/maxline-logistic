"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "What logistic services does Maxline Global offer?",
        answer: "Maxline Global provides a full range of logistics solutions including sea, air, and land freight, customs clearance, warehousing, project cargo handling, chartering, and more — tailored to your business needs across the GCC and beyond."
    },
    {
        question: "Which region of countries does Maxline Global serve?",
        answer: "We operate globally with a strong presence across the GCC countries, Asia, Europe, Africa, and the Americas. Our network enables seamless international trade and efficient cargo movement across all major trade lanes."
    },
    {
        question: "Do you handle dangerous or hazardous cargo?",
        answer: "Yes. Maxline Global is certified and experienced in handling hazardous and non-hazardous materials, including chemicals and reefer (temperature-controlled) cargo. Our team follows strict safety standards and international regulations."
    },
    {
        question: "How can I track my shipment in real-time?",
        answer: "We provide advanced tracking tools and dedicated customer support to keep you updated on your shipment's status from origin to destination."
    },
    {
        question: "What is Project Cargo handling?",
        answer: "Project cargo involves the transportation of large, heavy, high-value, or complex pieces of equipment. We offer specialized engineering and logistics planning for these unique shipments."
    },
    {
        question: "Do you offer door-to-door delivery?",
        answer: "Yes, our end-to-door logistics network ensures your goods are picked up from the supplier and delivered directly to your specified location safely."
    },
    // Additional 6 FAQs for demo
    { question: "What are your warehousing capabilities?", answer: "We offer secure, climate-controlled warehousing solutions strategically located near major ports." },
    { question: "Can you assist with customs documentation?", answer: "Our experts handle all necessary customs clearances and documentation to ensure smooth border crossings." },
    { question: "What is the typical transit time for sea freight?", answer: "Transit times vary by route, but our optimized scheduling ensures the fastest possible sea transit." },
    { question: "Do you provide insurance for high-value cargo?", answer: "Yes, we offer comprehensive cargo insurance options to protect your investments during transit." },
    { question: "What types of aircraft do you use for air freight?", answer: "We utilize both commercial cargo planes and charters depending on the urgency and size of your load." },
    { question: "How do I get a quote for my shipment?", answer: "You can request a quote through our website portal or contact our sales team directly for a tailored proposal." }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [showAll, setShowAll] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const displayedFaqs = showAll ? faqs : faqs.slice(0, 6);



    // Parallax logic for image
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative w-full md:min-h-screen py-24">
            {/* Cinematic Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-70 md:top-10 right-0 w-[600px] h-[600px] bg-blue-400/40 blur-[120px] rounded-full" />
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Sticky Content */}
                    <div className="md:sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Frequently Asked <span className="text-blue-600">Questions</span>
                            </h2>
                            <p className="mt-6 text-foreground/60 text-lg leading-relaxed max-w-lg">
                                Discover quick answers to the questions our clients ask most. From shipment tracking to specialized cargo handling, we cover everything you need for a smooth delivery.
                            </p>
                        </motion.div>

                        {/* <motion.div
                            style={{ y: yImage }}
                            className="mt-12 relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
                        >
                            <Image
                                src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Ffaq.webp&w=1080&q=75"
                                alt="Maxline FAQ"
                                width={1080}
                                height={700}
                                className="object-cover w-full aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div> */}
                    </div>

                    {/* Right Side: Scrollable Accordion */}
                    <div className="flex flex-col h-full">
                        <div className="flex-1 space-y-4">
                            {displayedFaqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`rounded-3xl border transition-all duration-300 ${openIndex === index
                                        ? "bg-blue-50 border-blue-200 shadow-md"
                                        : "bg-gray-50/50 border-gray-100 hover:border-blue-100"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <span
                                            className={`text-lg font-semibold ${openIndex === index ? "text-blue-700" : "text-gray-800"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`p-2 rounded-full transition-transform duration-300 ${openIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-gray-200 text-gray-500"
                                                }`}
                                        >
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-blue-100 pt-4 mx-6">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            {faqs.length > 6 && (
                                <motion.div
                                    className="mt-8 flex justify-center lg:justify-start"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                >
                                    <button
                                        onClick={() => setShowAll(!showAll)}
                                        className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg active:scale-95"
                                    >
                                        {showAll ? "Show Less" : "Load More Questions"}
                                        <div className="bg-white/20 rounded-full p-1 transition-transform group-hover:rotate-90">
                                            {showAll ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
      `}</style>
        </section>
    );
}
