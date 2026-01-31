"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-[#0b0f0c] text-white">
            {/* Floating crystal background */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-30">
                <motion.img
                    src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769894876/crystal_dfqlgy.png"
                    alt="crystal"
                    className="w-[500px] max-w-none select-none"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, -15, 0],
                        rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Ambient background rings */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/5" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full border border-white/5" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
                <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
                    {/* Left Column */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-6xl font-extrabold tracking-tight text-[#a855f7] transition-all duration-700 hover:tracking-wide"
                        >
                            Let's Talk
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="mt-4 max-w-sm text-sm text-white/70 transition-colors duration-500 hover:text-white"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="mt-6 flex gap-3"
                        >
                            {["f", "in", "ig", "yt"].map((i, index) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                    className="group relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 text-xs text-white/80 transition-all duration-500 hover:scale-110 hover:border-[#a855f7] hover:text-[#a855f7]"
                                >
                                    <span className="relative z-10">{i}</span>
                                    <span className="absolute inset-0 scale-0 rounded-full bg-[#a855f7]/10 transition-all duration-500 group-hover:scale-150" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="mt-10"
                        >
                            <p className="mb-3 text-sm text-white/80">Get the latest insights & insights</p>

                            <div className="group flex items-center rounded-full bg-white/5 p-1 transition-all duration-500 hover:bg-white/10 focus-within:bg-white/10">
                                <input
                                    placeholder="Your Email Address"
                                    className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/40"
                                />
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a855f7] text-white transition-all duration-500 hover:rotate-45 hover:scale-110 active:scale-95">
                                    ➤
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <h4 className="mb-6 text-lg font-semibold">Quick Link</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                {[
                                    "About Us",
                                    "Our Team",
                                    "Our Portfolio",
                                    "Careers",
                                    "Contact Us",
                                ].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                        className="group relative w-fit cursor-pointer transition-all duration-500 hover:text-white"
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#a855f7] transition-all duration-500 group-hover:w-full" />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col justify-between"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs text-white/50">reach@company.com</p>
                                <p className="text-xl font-semibold transition-all duration-500 hover:text-[#a855f7]">
                                    (+123) 456 789 00
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                                className="group relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#a855f7] text-center text-xs text-[#a855f7] transition-all duration-500 hover:scale-110"
                            >
                                <span className="relative z-10 leading-tight">
                                    Contact
                                    <br />
                                    With Us ↗
                                </span>
                                <span className="absolute inset-0 scale-0 rounded-full bg-[#d9ff3f]/10 transition-all duration-500 group-hover:scale-150" />
                            </motion.div>
                        </div>

                        <div>
                            <h4 className="mb-6 mt-14 text-lg font-semibold">Our Solutions</h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                {[
                                    "Web Development",
                                    "UI/UX Design",
                                    "Mobile Application",
                                    "Brand Identity Design",
                                    "Cyber Security",
                                ].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                                        className="group relative w-fit cursor-pointer transition-all duration-500 hover:text-white"
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#a855f7] transition-all duration-500 group-hover:w-full" />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Keyframes */}

        </footer>
    );
}
