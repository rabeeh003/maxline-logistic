"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    // Parallax values
    const yImage = useTransform(smoothProgress, [0, 1], [0, -200]);
    const yText = useTransform(smoothProgress, [0, 1], [0, -50]);
    const opacityText = useTransform(smoothProgress, [0, 0.5], [1, 0]);
    const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.05]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen md:min-h-[90vh] flex flex-col items-center justify-center gap-8 py-12 md:py-20 overflow-hidden"
        >
            {/* --- FLOATING ELEMENTS --- */}

            {/* Plane - Top Left */}
            <motion.div
                className="absolute top-[10%] left-[5%] z-0 opacity-40 md:opacity-100"
                animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fmaxline-plane.webp&w=1080&q=100" alt="Plane" width={180} height={100} className="w-24 md:w-44" />
            </motion.div>

            {/* Truck - Bottom Left */}
            <motion.div
                className="absolute bottom-[20%] left-[2%] z-0 opacity-30 md:opacity-100"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fmaxline-truck.webp&w=1080&q=100" alt="Truck" width={220} height={120} className="w-28 md:w-52" />
            </motion.div>

            {/* Ship - Top Right */}
            <motion.div
                className="absolute top-[15%] right-[5%] z-0 opacity-30 md:opacity-100"
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fmaxline-ship.webp&w=1080&q=100" alt="Ship" width={200} height={110} className="w-28 md:w-48" />
            </motion.div>

            {/* --- MAIN CONTENT --- */}

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block max-w-3xl text-center justify-center z-20 px-4"
            >
                <h1 className={title({ size: "lg" })}>
                    Your&nbsp;<span className={title({ color: "violet", size: "lg" })}>Trusted Partner</span> in
                </h1>
                <br />
                <h1 className={title({ size: "lg" })}>
                    Logistics and Freight Delivery
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
                        href={siteConfig.links.docs}
                    >
                        Get Started
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                            size: "lg",
                            color: "success"
                        })}
                        href={siteConfig.links.github}
                    >
                        <Phone size={22} className="text-green-600" />
                        Whatsapp
                    </Link>
                </div>
            </motion.div>

            {/* Main Center Image */}
            <motion.div
                style={{ y: yImage, scale: scaleImage }}
                className="relative w-full max-w-[1000px] flex justify-center z-10 px-4 mt-12"
            >
                <div className="absolute inset-0 bg-violet-500/10 blur-[120px] rounded-full -z-10" />
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-sm">
                    <Image
                        src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fcontainer-hero.webp&w=2048&q=75"
                        alt="Logistics Preview"
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