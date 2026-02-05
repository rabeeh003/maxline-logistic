"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene to avoid SSR issues
const HangingContainer = dynamic(
    () => import("@/components/home/HangingContainer"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse text-default-400">Loading 3D Scene...</div>
            </div>
        )
    }
);

export default function HeroSectiond() {
    return (
        <section
            className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: "radial-gradient(circle at center, #1e293b, #020617)"
            }}
        >
            {/* 3D Scene Layer */}
            <div className="absolute inset-0 w-full h-full z-10">
                <HangingContainer />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 pointer-events-none max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg"
                >
                    Global Logistics, <span className="text-blue-400">Delivered</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="pointer-events-auto flex flex-wrap gap-4 justify-center"
                >
                    <Link
                        isExternal
                        className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", size: "lg" })}
                        href="/"
                    >
                        Get Started
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({ variant: "bordered", radius: "full", size: "lg", color: "success" })}
                        href='/'
                    >
                        <Phone size={22} className="text-green-500" />
                        <span className="text-white">Whatsapp</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}