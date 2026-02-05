"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ShowcaseVideoSectionMobail() {
    const ref = useRef(null);

    // same parallax system as hero + services
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const yText = useTransform(smooth, [0, 1], [80, -80]);
    const yVideo = useTransform(smooth, [0, 1], [120, -120]);
    const scaleVideo = useTransform(smooth, [0, 1], [0.9, 1.05]);
    const opacity = useTransform(smooth, [0, 0.3], [0, 1]);

    return (
        <section
            ref={ref}
            className="md:hidden relative overflow-hidden"
        >
            {/* 🌟 cinematic glow */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* TEXT */}
                <motion.div style={{ y: yText, opacity }} className="mb-16">
                    <p className="text-blue-500 font-semibold mb-4">
                        Experience Maxline
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Logistic without limits
                    </h2>

                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                        Our tailored freight solutions are engineered to meet the demands of modern trade - ensuring every shipment arrives on time, on budget, and without compromise.
                    </p>
                </motion.div>

                {/* 🎥 VIDEO CONTAINER */}
                <motion.div
                    style={{ y: yVideo, scale: scaleVideo, opacity }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
                >
                    {/* glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none z-10" />

                    {/* VIDEO */}
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source
                            src="https://maxlineglobal.com/videos/maxline-web.webm"
                            type="video/webm"
                        />
                    </video>
                </motion.div>

                {/* subtle ground glow */}
                <div className="mx-auto mt-10 w-[60%] h-[30px] bg-blue-500/20 blur-[60px] rounded-full" />
            </div>
        </section>
    );
}
