"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail } from "lucide-react"; // Optional: adding icons for a premium feel

export default function CTASection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto relative rounded-[2rem] overflow-hidden min-h-[400px] flex items-center">

                {/* Background Image */}
                <Image
                    src="https://maxlineglobal.com/_next/image?url=%2Fimages%2Fcta-bg-v2.jpg&w=828&q=90"
                    alt="Logistics background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                <div className="relative z-10 w-full grid md:grid-cols-2 gap-10 p-8 md:p-16 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Ready to move your <br />
                            <span className="text-blue-400">business forward?</span>
                        </h2>
                        <p className="mt-6 text-xl text-gray-200">
                            Partner with Maxline Global for reliable logistics solutions.
                        </p>
                    </motion.div>

                    {/* Right Side: Contact Cards */}
                    <div className="flex flex-col gap-4 md:items-end">

                        {/* Phone Card */}
                        <motion.a
                            href="tel:+97142822022"
                            whileHover={{ scale: 1.02 }}
                            className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 transition-colors hover:bg-white/15"
                        >
                            <div className="bg-blue-500/20 p-3 rounded-full">
                                <Phone className="text-blue-400 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Call for enquiry</p>
                                <p className="text-xl font-bold text-white">+971 4 282 2022</p>
                            </div>
                        </motion.a>

                        {/* Email Card */}
                        <motion.a
                            href="mailto:enquires@maxlineglobal.com"
                            whileHover={{ scale: 1.02 }}
                            className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 transition-colors hover:bg-white/15"
                        >
                            <div className="bg-blue-500/20 p-3 rounded-full">
                                <Mail className="text-blue-400 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Send us email</p>
                                <p className="text-xl font-bold text-white lowercase">enquires@maxlineglobal.com</p>
                            </div>
                        </motion.a>

                    </div>
                </div>
            </div>
        </section>
    );
}