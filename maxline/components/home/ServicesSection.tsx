"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Plane, Ship, Truck } from "lucide-react";
import { Button } from "@heroui/react";

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef(null);

    const services = [
        {
            id: "air",
            number: "01",
            title: "Air Freight",
            description:
                "Fast and reliable air cargo solutions for time-sensitive shipments worldwide.",
            bigImage: "/homeimages/air-cargo.webp",        // BIG container image per service
            thumb: "/homeimages/air-thumb.png",         // small container PNG for card
            color: "bg-rose-500",
            icon: <Plane className="text-white" size={24} />,
        },
        {
            id: "sea",
            number: "02",
            title: "Sea Freight",
            description:
                "Cost-effective ocean freight built for global trade and massive cargo.",
            bigImage: "/homeimages/cargo-ship.webp",
            thumb: "/homeimages/sea-thumb.png", color: "bg-blue-500",
            icon: <Ship className="text-white" size={24} />,
        },
        {
            id: "road",
            number: "03",
            title: "Road Transport",
            description:
                "Flexible trucking and door-to-door delivery across cities and countries.",
            bigImage: "/homeimages/cargo-road.webp",
            thumb: "/homeimages/road-thumb.webp",
            color: "bg-emerald-500",
            icon: <Truck className="text-white" size={24} />,
        },
    ];


    // auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [activeTab]);

    // 🔥 SAME PARALLAX SYSTEM AS HERO
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

    const yImage = useTransform(smooth, [0, 1], [100, -100]);
    const scaleImage = useTransform(smooth, [0, 1], [0.9, 1.1]);
    const yText = useTransform(smooth, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative pb-32 overflow-hidden">

            {/* cinematic background glow */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 px-6 items-center">

                {/* LEFT CONTENT */}
                <motion.div style={{ y: yText }} className="lg:col-span-5 space-y-10">

                    <div>
                        <p className="text-blue-500 font-semibold mb-4">Our Services</p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Logistics built for
                            <br /> speed & reliability
                        </h2>

                        <p className="text-gray-500 mt-6 max-w-md">
                            We move cargo through air, sea and road with precision and
                            cinematic scale. Every shipment handled with expertise.
                        </p>
                    </div>

                    <div className="hidden md:grid grid-cols-3 gap-3 md:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`relative cursor-pointer rounded-3xl p-3 md:p-6 transition-all duration-300 overflow-hidden
      ${activeTab === index
                                        ? "bg-white shadow-xl scale-[1.10]"
                                        : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                            >
                                {/* 🔵 FULL BORDER PROGRESS */}
                                {activeTab === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-transparent"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, transparent, transparent)",
                                        }}
                                    >
                                        <motion.div
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 10, ease: "linear" }}
                                            className="absolute inset-0 rounded-3xl border-2"
                                            style={{
                                                borderColor: "transparent",
                                                background:
                                                    `linear-gradient(90deg, ${service.color.replace(
                                                        "bg-",
                                                        ""
                                                    )}, transparent)`,
                                            }}
                                        />
                                    </motion.div>
                                )}

                                {/* CARD CONTENT */}
                                <div className="relative h-full flex flex-col justify-between min-h-[140px] md:min-h-[220px]">

                                    {/* TOP ROW */}
                                    <div className="hidden md:flex items-start justify-between">
                                        {/* Arrow – top left */}
                                        {/* <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all
            ${activeTab === index
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-gray-400"
                                                }`}
                                        >
                                            <ArrowRight size={16} />
                                        </div> */}

                                        {/* Icon – top right */}
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color} shadow-md`}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* MOBILE ICON CENTER */}
                                    <div className="flex md:hidden justify-center mt-2">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color}`}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* BOTTOM TEXT */}
                                    <div className="mt-auto text-center md:text-left pt-4">
                                        <h4
                                            className={`font-bold text-sm md:text-lg transition-colors
            ${activeTab === index ? "text-black" : "text-gray-500"}`}
                                        >
                                            {service.title}
                                        </h4>

                                        {activeTab === index && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-xs text-gray-400 mt-1"
                                            >
                                                Currently viewing
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="sticky bottom-0 z-50 md:hidden grid grid-cols-3 gap-3 md:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`relative cursor-pointer rounded-3xl p-3 md:p-6 transition-all duration-300 overflow-hidden
      ${activeTab === index
                                        ? "bg-white shadow-xl scale-[1.10]"
                                        : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                            >
                                {/* 🔵 FULL BORDER PROGRESS */}
                                {activeTab === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-transparent"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, transparent, transparent)",
                                        }}
                                    >
                                        <motion.div
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 10, ease: "linear" }}
                                            className="absolute inset-0 rounded-3xl border-2"
                                            style={{
                                                borderColor: "transparent",
                                                background:
                                                    `linear-gradient(90deg, ${service.color.replace(
                                                        "bg-",
                                                        ""
                                                    )}, transparent)`,
                                            }}
                                        />
                                    </motion.div>
                                )}

                                {/* CARD CONTENT */}
                                <div className="relative h-full flex flex-col justify-between min-h-[140px] md:min-h-[220px]">

                                    {/* TOP ROW */}
                                    <div className="hidden md:flex items-start justify-between">
                                        {/* Arrow – top left */}
                                        {/* <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all
            ${activeTab === index
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-gray-400"
                                                }`}
                                        >
                                            <ArrowRight size={16} />
                                        </div> */}

                                        {/* Icon – top right */}
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color} shadow-md`}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* MOBILE ICON CENTER */}
                                    <div className="flex md:hidden justify-center mt-2">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color}`}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* BOTTOM TEXT */}
                                    <div className="mt-auto text-center md:text-left pt-4">
                                        <h4
                                            className={`font-bold text-sm md:text-lg transition-colors
            ${activeTab === index ? "text-black" : "text-gray-500"}`}
                                        >
                                            {service.title}
                                        </h4>

                                        {activeTab === index && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-xs text-gray-400 mt-1"
                                            >
                                                Currently viewing
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

                {/* RIGHT BIG CINEMATIC IMAGE */}
                <motion.div
                    style={{ y: yImage, scale: scaleImage }}
                    className="lg:col-span-7 relative h-[400px] flex items-center justify-center"
                >
                    {/* glow under container */}
                    <div className="absolute w-[600px] h-[200px] bg-blue-500/30 blur-[120px] rounded-full bottom-10" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -80, scale: 0.9 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full max-w-[900px]"
                        >
                            <Image
                                src={services[activeTab].bigImage}
                                alt="service"
                                width={1200}
                                height={800}
                                priority
                                className="w-full h-auto"
                            />

                            {/* ground shadow */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[30px]
              w-[60%] h-[14px] bg-black/40 blur-[40px] rounded-full" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
            <div className="w-full flex justify-center">
                <Button variant="solid" color="primary" size="lg" className="rounded-full -mt-10">Explore Services</Button>
            </div>
        </section>
    );
}
