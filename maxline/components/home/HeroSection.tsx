"use client";

import { Link } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { LocateFixed } from "lucide-react";

export default function HeroSection() {
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

    // Parallax transforms
    const yImage = useTransform(smoothProgress, [0, 1], [0, -200]);
    const yText = useTransform(smoothProgress, [0, 1], [0, -50]);
    const opacityText = useTransform(smoothProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.1]);

    // ⭐ Cinematic width zoom on scroll
    const imageWidth = useTransform(
        smoothProgress,
        [0, 2, 1],
        ["60vw", "100vw", "35vw"] // BIG at top → smaller on scroll
    );

    return (
        <section
            ref={containerRef}
            className="relative md:min-h-[90vh] flex flex-col items-center justify-center gap-8 pb-50 md:pb-10 pt-50 overflow-hidden
      md:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_55%)]
      before:absolute before:inset-0 md:before:bg-gradient-to-b md:before:from-white/5 md:before:to-transparent before:pointer-events-none"
        >
            {/* Top cinematic light */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-400/20 blur-[140px] rounded-full" />
            </div>

            {/* 1️⃣ HERO TEXT */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block max-w-2xl text-center justify-center z-20 px-4"
            >
                <h1 className={title({ size: "lg" })}>
                    Your Trusted Partner in
                </h1>
                <br />
                <h1 className={title({ size: "lg" })}>
                    <span className={title({ color: "blue", size: "lg" })}>
                        Logistics & Freight
                    </span>{" "}
                    Delivery
                </h1>

                <div className="flex flex-wrap gap-4 justify-center mt-10">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                            size: "lg",
                        })}
                        href="/"
                    >
                        Get Started
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                            size: "lg",
                            color: "primary",
                        })}
                        href="/"
                    >
                        <LocateFixed size={22} className="text-primary" />
                        Track Your Shipment
                    </Link>
                </div>
            </motion.div>

            {/* 2️⃣ HERO IMAGE */}
            <motion.div
                style={{ y: yImage, scale: scaleImage }}
                className="relative w-full max-w-[1400px] hidden md:flex justify-center z-10 px-2 mt-12"
            >
                {/* Glow behind container */}
                <div className="absolute -top-10 w-[700px] h-[250px] bg-blue-500/30 blur-[140px] rounded-full z-0" />
                <div className="absolute -top-20 w-[400px] h-[150px] bg-blue-400/40 blur-[80px] rounded-full z-0" />

                {/* Animated width wrapper */}
                <motion.div style={{ width: imageWidth }} className="relative z-10">
                    <Image
                        src="/homeimages/container.png"
                        alt="Shipping Container"
                        height={800}
                        width={1200}
                        priority
                        className="w-full h-auto"
                    />

                    {/* Ground shadow */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[50px]
          w-[60%] h-[12px] bg-gray-900 dark:bg-gray-100/40 blur-[40px] dark:blur-[20px] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
