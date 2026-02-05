"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plane, Ship, Truck } from "lucide-react";
import Image from "next/image";

const services = [
    {
        id: "air",
        title: "Air Freight",
        description: "Fast and reliable air cargo solutions for time-sensitive shipments.",
        color: "bg-rose-500",
        icon: <Plane className="text-white" size={24} />,
        image: "https://img.pikbest.com/wp/202403/airplane-blue-sky-3d-rendering-of-a-commercial-industrial-jet-delivering-cargo-as-carton-parcels-against-background_9823277.jpg!bw700", // Replace with your Air image
    },
    {
        id: "sea",
        title: "Sea Freight",
        description: "Cost-effective ocean freight for large volume global trade.",
        color: "bg-blue-500",
        icon: <Ship className="text-white" size={24} />,
        image: "https://media.licdn.com/dms/image/v2/D5622AQFAe377BMkPzA/feedshare-shrink_800/feedshare-shrink_800/0/1681400135515?e=2147483647&v=beta&t=kF2vYLq92STT9fgu9oKPyWLMqVN5DU-q8XZkjj4s3y4", // Replace with your Sea image
    },
    {
        id: "road",
        title: "Road Transport",
        description: "Flexible trucking and door-to-door delivery across continents.",
        color: "bg-emerald-500",
        icon: <Truck className="text-white" size={24} />,
        image: "https://cdn.dribbble.com/userupload/24994123/file/original-c721592a3cc611ebd644445363a1823c.gif", // Replace with your Road image
    },
];

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState(0);

    // Automatic Switching Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % services.length);
        }, 10000); // Switch every 5 seconds
        return () => clearInterval(timer);
    }, [activeTab]); // Reset timer when activeTab changes (including manual clicks)

    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* LEFT SIDE: The 3D/Container Image Display */}
                <div className="lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={services[activeTab].image}
                                alt={services[activeTab].title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-white text-3xl font-bold">{services[activeTab].title}</h3>
                                <p className="text-white/80 mt-2 max-w-md">{services[activeTab].description}</p>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT SIDE: Interactive Cards */}
                <div className="lg:col-span-5 flex md:flex-col gap-2 md:gap-4 ">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            onClick={() => setActiveTab(index)}
                            className={`relative cursor-pointer group p-2 md:p-6 rounded-[2rem] transition-all duration-300 border-2 ${activeTab === index
                                ? "bg-white border-transparent shadow-xl scale-105 z-10"
                                : "bg-gray-50 border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col md:flex-row items-center gap-4">
                                    {/* Icon Circle (Inspired by your sample) */}
                                    <div className={`md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center ${service.color} shadow-lg`}>
                                        {service.icon}
                                    </div>
                                    <div className="hidden md:block">
                                        <h4 className={`font-bold text-lg ${activeTab === index ? "text-black" : "text-gray-500"}`}>
                                            {index + 1} - {service.title}
                                        </h4>
                                        {activeTab === index && (
                                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-400 mt-1">
                                                Currently viewing
                                            </motion.p>
                                        )}
                                    </div>
                                    <div className="block md:hidden">
                                        <h4 className={`font-bold text-lg ${activeTab === index ? "text-black" : "text-gray-500"}`}>
                                            {service.title}
                                        </h4>
                                    </div>
                                </div>

                                {/* Arrow Button (Inspired by your sample) */}
                                <div className={`w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-all ${activeTab === index ? "bg-black text-white" : "bg-gray-200 text-gray-400"
                                    }`}>
                                    <ArrowRight size={18} className={activeTab === index ? "" : "group-hover:translate-x-1 transition-transform"} />
                                </div>
                            </div>

                            {/* Progress bar for the auto-switch */}
                            {activeTab === index && (
                                <motion.div
                                    layoutId="progress"
                                    className="absolute bottom-0 left-8 right-8 h-1 bg-gray-100 rounded-full overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 10, ease: "linear" }}
                                        className={`h-full ${service.color}`}
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}