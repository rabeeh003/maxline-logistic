"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth out the scroll values using useSpring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Parallax: Image moves up fast, Text fades and moves up slightly
    const yImage = useTransform(smoothProgress, [0, 1], [0, -200]);
    const yText = useTransform(smoothProgress, [0, 1], [0, -50]);
    const opacityText = useTransform(smoothProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col items-center justify-center gap-8 py-12 md:py-20 overflow-hidden"
        >
            {/* 1. Animated Text Content */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block max-w-2xl text-center justify-center z-20 px-4"
            >
                <h1 className={title({ size: "lg" })}>
                    Make&nbsp;<span className={title({ color: "violet", size: "lg" })}>beautiful</span>
                </h1>
                <br />
                <h1 className={title({ size: "lg" })}>
                    websites in record time.
                </h1>

                <p className={subtitle({ class: "mt-6 text-default-500 max-w-lg mx-auto" })}>
                    The modern React UI library that combines speed with high-end aesthetics.
                    Stop worrying about CSS and start building.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-10">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                            size: "lg",
                        })}
                        href={siteConfig.links.docs}
                    >
                        Get Started
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                            size: "lg"
                        })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={22} />
                        GitHub
                    </Link>
                </div>
            </motion.div>

            {/* 2. Parallax Image with Scale Effect */}
            <motion.div
                style={{ y: yImage, scale: scaleImage }}
                className="relative w-full max-w-[1200px] flex justify-center z-10 px-4 mt-12"
            >
                {/* Subtle glow behind the image */}
                <div className="absolute inset-0 bg-violet-500/10 blur-[120px] rounded-full -z-10" />

                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                        src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fcontainer-hero.webp&w=2048&q=75"
                        alt="Product Preview"
                        height={800}
                        width={1200}
                        priority
                        className="w-full h-auto object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}