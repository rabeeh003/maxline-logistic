"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
    general: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Insights & Update", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Air Freight", href: "/services/air-freight" },
        { name: "Land Freight", href: "/services/land-freight" },
        { name: "Sea Freight", href: "/services/sea-freight" },
        { name: "Project Cargo", href: "/services/project-cargo" },
        { name: "Packing", href: "/services/packing" },
        { name: "Warehousing", href: "/services/warehousing" },
        { name: "Exhibition Cargo", href: "/services/exhibition" },
        { name: "Moving & Lashing", href: "/services/moving-lashing" },
    ],
    support: [
        { name: "Track your Shipment", href: "/track" },
        { name: "Get Quote", href: "/quote" },
        { name: "Technical Support", href: "/support" },
    ],
    socials: [
        { name: "Linkedin", href: "#", icon: <Linkedin size={18} /> },
        { name: "Instagram", href: "#", icon: <Instagram size={18} /> },
        { name: "Facebook", href: "#", icon: <Facebook size={18} /> },
    ],
};

export default function Footer() {
    return (
        <footer className="relative text-foreground/80 pt-20 pb-10 border-t border-white/5">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-70 md:top-10 right-0 w-[600px] h-[600px] bg-blue-400/40 blur-[120px] rounded-full" />
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section: Branding & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Maxline Global</h2>
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin size={16} className="text-blue-500" />
                            <span>Jebel Ali Free Zone, Dubai</span>
                        </div>
                    </div>

                    <Link href="/quote">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                        >
                            Get a Quote
                            <ArrowUpRight size={18} />
                        </motion.button>
                    </Link>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* General */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">General</h3>
                        <ul className="space-y-4 text-sm">
                            {footerLinks.general.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Services</h3>
                        <ul className="space-y-4 text-sm">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Support</h3>
                        <ul className="space-y-4 text-sm">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-6">Follow Us</h3>
                        <div className="flex flex-col gap-4">
                            {footerLinks.socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="flex items-center gap-3 hover:text-white transition-colors text-sm"
                                >
                                    <span className="p-2 bg-white/5 rounded-lg text-blue-400">
                                        {social.icon}
                                    </span>
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest font-medium">
                    <p>© 2026 Maxline Global. All Rights Reserved.</p>
                    <p className="opacity-60">
                        Designed and Developed by{" "}
                        <span className="text-white">Ziron Media</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}