"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const certifications = [
    { name: "SCN", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Fscn.png&w=384&q=75" },
    { name: "DSSA", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Fdssa.png&w=384&q=75" },
    { name: "WCA", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Fwca.png&w=384&q=75" },
    { name: "FIATA", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Ffiata.png&w=384&q=75" },
    { name: "NAFL", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Fnafl.png&w=384&q=75" },
    { name: "ISO", img: "https://maxlineglobal.com/_next/image?url=%2Fimages%2Flogos%2Fiso.png&w=384&q=75" },
];

export default function CertificationsSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const yLogos = useTransform(scrollYProgress, [0, 1], [50, -30]);
    const smoothY = useSpring(yLogos, { stiffness: 50, damping: 20, restDelta: 0.001 });

    return (
        <section ref={containerRef} className="relative py-24 overflow-hidden">
            {/* Cinematic background glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-blue-500/40 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Certified for Excellence <br />in <span className="text-blue-500">Global Logistics</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        Maxline Global's certifications demonstrate our commitment to safe, efficient, and compliant logistics.
                    </p>
                </motion.div>

                {/* Logos Grid */}
                <motion.div
                    style={{ y: smoothY }}
                    className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, filter: "drop-shadow(0px 0px 15px rgba(59, 130, 246, 0.8))" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            // The drop-shadow below creates the permanent subtle blue glow
                            className="relative flex items-center justify-center filter drop-shadow(0px 0px 8px rgba(59, 130, 246, 0.3))"
                        >
                            <Image
                                src={cert.img}
                                alt={cert.name}
                                // Set a fixed height for all icons
                                height={60}
                                width={120}
                                className="h-[60px] w-auto object-contain brightness-110 contrast-125"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}