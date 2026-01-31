"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform vertical scroll to horizontal movement
    // Buffer zones: 0-10% = pause before starting, 90-100% = pause after ending
    // Horizontal scroll happens between 10-90% of the scroll progress
    const x = useTransform(
        scrollYProgress,
        [0, 0.1, 0.26, 0.42, 0.58, 0.74, 0.9, 1],
        ["0px", "0px", "-280px", "-560px", "-840px", "-1120px", "-1400px", "-1400px"]
    );

    const projectsData = [
        {
            title: "Monastery",
            category: "Design · 2023",
            image: "https://images.unsplash.com/photo-1581093458791-9d09b90b6c5b?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Content Creation",
            category: "Design · 2023",
            image: "https://images.unsplash.com/photo-1581093588401-12f2a64a4c3a?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Digital Art",
            category: "Art · 2023",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Brand Identity",
            category: "Branding · 2024",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Web Design",
            category: "UI/UX · 2024",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Photography",
            category: "Visual · 2024",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative bg-[#0a0a0a] text-white"
            style={{ height: "400vh" }}
        >
            <div className="sticky top-0 h-screen overflow-hidden rounded-3xl">
                {/* Floating left artwork (behind cards) */}
                <motion.img
                    src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769883979/folder_p4mjo3.png"
                    alt="floating-shape"
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.35 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="pointer-events-none absolute left-0 top-1/2 z-0 w-[520px] -translate-y-1/2 select-none"
                />

                {/* Purple glow */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-[#a855f7]/20 blur-[160px]" />
                    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#a855f7]/10 blur-[140px]" />
                </div>

                <div className="relative z-10 flex h-full flex-col px-6 py-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex w-full flex-col rounded-2xl"
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                            Projects
                        </p>

                        <h2 className="mt-6 text-5xl font-semibold leading-tight">
                            Our selected <br />
                            <span className="text-[#a855f7]">projects</span>
                        </h2>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className="mt-10 w-fit rounded-full bg-[#a855f7] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a855f7]/30"
                        >
                            See all
                        </motion.button>
                    </motion.div>

                    {/* Horizontal Scroll Cards */}
                    <div className="mt-16 flex-1 overflow-hidden">
                        <motion.div
                            style={{ x }}
                            className="flex h-full items-center gap-8"
                        >
                            {projectsData.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    index={index}
                                    title={project.title}
                                    category={project.category}
                                    image={project.image}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ index, title, category, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group relative z-10 flex-shrink-0 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            style={{ width: "450px", borderRadius: "32px" }}
        >
            <div className="relative h-[400px] w-full overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7 }}
                />
            </div>

            <div className="flex items-center justify-between p-7">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{category}</p>
                </div>

                <motion.div
                    whileHover={{ rotate: 45 }}
                    className="rounded-full border border-white/20 p-3"
                >
                    <span className="text-[#a855f7] text-lg">↗</span>
                </motion.div>
            </div>
        </motion.div>
    );
}
