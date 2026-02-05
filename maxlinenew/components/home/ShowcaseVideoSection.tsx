"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ShowcaseVideoSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll progress for THIS section only
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // 🎥 Cinematic transforms
    const width = useTransform(smooth, [0, 0.4], ["80vw", "100vw"]);
    const height = useTransform(smooth, [0, 0.4], ["60vh", "100vh"]);
    const radius = useTransform(smooth, [0, 0.4], ["32px", "0px"]);
    const scale = useTransform(smooth, [0, 1], [1, 1.05]);
    const glowOpacity = useTransform(smooth, [0, 0.3], [1, 0]);
    const yText = useTransform(smooth, [0, 1], [80, -80]);
    const opacity = useTransform(smooth, [0, 0.3], [0, 1]);


    return (
        <section
            ref={sectionRef}
            className="hidden md:block relative h-[220vh]"
        >
            {/* STICKY PIN */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Glow (fades out while expanding) */}
                <motion.div
                    style={{ opacity: glowOpacity }}
                    className="absolute w-[900px] h-[400px] bg-blue-500/30 blur-[160px] rounded-full"
                />

                {/* VIDEO CONTAINER */}
                <motion.div
                    style={{ width, height, borderRadius: radius, scale }}
                    className="relative overflow-hidden shadow-2xl"
                >
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 z-10 pointer-events-none" />

                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src="https://maxlineglobal.com/videos/maxline-web.webm"
                            type="video/webm"
                        />
                    </video>
                </motion.div>
            </div>
        </section>
    );
}

