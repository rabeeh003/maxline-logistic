"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function FreightServicesSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth scroll values
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Parallax transforms for cards
    const yCards = useTransform(smoothProgress, [0, 1], [0, -50]);
    const opacityCards = useTransform(smoothProgress, [0, 0.7], [1, 0.7]);

    const freightServices = [
        {
            title: "Land Freight",
            desc: "Efficient land freight across the GCC—FTL, LTL, and oversized cargo.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Ftruck.webp&w=828&q=85",
            bgColor: "bg-[#FF5A5F]", // Vibrant Rose/Red
            textColor: "text-white",
        },
        {
            title: "Air Freight",
            desc: "Swift air freight solutions for global reach and time-critical shipments.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Fplane.webp&w=828&q=85",
            bgColor: "bg-[#00D084]", // Green
            textColor: "text-white",
        },
        {
            title: "Sea Freight",
            desc: "Reliable sea freight services across continents with flexible solutions.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Fship.webp&w=828&q=85",
            bgColor: "bg-[#0070F3]", // Blue
            textColor: "text-white",
        },
        {
            title: "Project Cargo",
            desc: "Specialized handling for heavy, oversized and complex cargo projects.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Fcontainer.webp&w=828&q=85",
            bgColor: "bg-[#FFB900]", // Yellow/Orange
            textColor: "text-black",
        },
        {
            title: "Warehousing",
            desc: "Strategic warehousing and distribution solutions for scalable logistics.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flifter.webp&w=828&q=85",
            bgColor: "bg-[#7928CA]", // Purple
            textColor: "text-white",
        },
        {
            title: "Moving & Lashing",
            desc: "Professional relocation and cargo securing for safe transit.",
            img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Fmovers.webp&w=828&q=85",
            bgColor: "bg-[#EBFF00]", // Lime Neon
            textColor: "text-black",
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative py-24 overflow-hidden"
        >
            {/* Cinematic glow background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-30 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full" />
                <div className="absolute top-50 left-1/3 w-[500px] h-[250px] bg-blue-400/30 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Integrated <br /> <span className="text-blue-600">Freight Solutions</span>
                    </h2>
                    <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
                        Tailored logistics services designed to move your business forward.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {freightServices.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`group relative h-[300px] rounded-[2.5rem] p-8 ${item.bgColor} ${item.textColor} overflow-hidden shadow-xl transition-all duration-500 cursor-pointer`}
                        >
                            {/* Text Content (Top Left) */}
                            <div className="relative z-20 max-w-[180px]">
                                <h3 className="text-3xl font-bold leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="opacity-80 text-sm leading-snug font-medium">
                                    {item.desc}
                                </p>
                            </div>

                            {/* "Learn More" Circle (Top Right) */}
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={24} />
                            </div>

                            {/* Image (Bottom Right) */}
                            <div className="absolute bottom-[-20px] right-[-20px] w-[220px] h-[220px]">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Subtle inner shadow for depth */}
                            <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
