"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// --- Animation helpers
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
        },
    },
};

const letter = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function JoinOurAgency() {
    const title = "JOIN OUR AGENCY";

    const letters = useMemo(() => title.split(""), [title]);

    return (
        <section className="relative h-[75vh] w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center">
            {/* Animated background glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(168,85,247,0.15),transparent_60%)]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.95),rgba(0,0,0,0.7)_30%,rgba(0,0,0,0.95))]" />
            </motion.div>

            {/* Left side animated image */}
            <motion.img
                src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769892262/status_lxddbo.png"
                alt="decorative"
                initial={{ y: 140, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-auto object-contain select-none"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                {/* Massive animated title */}
                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-[#a855f7] bg-clip-text text-transparent perspective-[1000px]"
                >
                    {letters.map((char, i) => (
                        <motion.span
                            key={i}
                            variants={letter}
                            className="inline-block"
                            style={{ marginRight: char === " " ? "14px" : "2px" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle reveal */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                >
                    We are always looking for new talent to join our team of creatives.
                </motion.p>

                {/* Button with smooth hover motion */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="mt-12"
                >
                    <motion.a
                        href="#openings"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center rounded-md bg-[#a855f7] px-10 py-3 text-sm font-semibold tracking-widest text-white hover:bg-[#a855f7]/90 transition-colors"
                    >
                        VIEW OPENINGS
                    </motion.a>
                </motion.div>
            </div>

            {/* Soft vignette */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />
        </section>
    );
}
