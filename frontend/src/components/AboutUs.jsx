"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * Animated Counter Component
 * Animates a number from 0 to target value when in view
 */
const Counter = ({ target, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const isInView = useInView(countRef, { once: true, amount: 0.5 });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (isInView) {
            setHasStarted(true);
        }
    }, [isInView]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [hasStarted, target, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const AboutUs = () => {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);

    // Scroll-based visibility
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const stats = [
        { label: "PROJECTS COMPLETED", value: 22, suffix: "K" },
        { label: "SKILLED PROFESSIONAL", value: 180, suffix: "" },
        { label: "VISITED CONFERENCE", value: 612, suffix: "" },
        { label: "HAPPY CLIENTS", value: 31, suffix: "K" },
    ];

    // Track scroll position for the rolling animation
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // REDUCED ROTATION SPEED: Changed multiplier from 0.4 to 0.15 for a slower roll
    const rotation = scrollY * 0.15;

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#a855f7] selection:text-white overflow-x-hidden">
            {/* Background Decorative Arcs */}
            <div className="absolute top-1/4 -left-10 opacity-20 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="border border-[#a855f7] rounded-full absolute"
                        style={{
                            width: `${(i + 1) * 80}px`,
                            height: `${(i + 1) * 80}px`,
                            top: `-${i * 40}px`,
                            left: `-${i * 40}px`,
                        }}
                    />
                ))}
            </div>

            {/* ROLLING ASSET - RE-SIZED & POSITIONED */}
            <motion.div
                className="fixed right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none select-none z-50 w-[350px] h-[450px] md:w-[450px] md:h-[300px]"
                style={{
                    transform: `translateY(-50%) rotate(${rotation}deg)`,
                    opacity: opacity, // Controlled by useScroll
                    transition: 'transform 0.15s ease-out'
                }}
            >
                <img
                    src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769861597/mettoloid_rggwra.png"
                    alt="3D Metal Spring"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.15)] opacity-60 md:opacity-80"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </motion.div>

            <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Top Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32 pt-12">
                    {/* Image Blob Container */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div
                            className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px] overflow-hidden shadow-2xl shadow-[#a855f7]/10"
                            style={{
                                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%',
                                animation: 'morph 8s ease-in-out infinite'
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=800"
                                alt="Team working"
                                className="w-full h-full object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/40 to-transparent"></div>
                        </div>

                        {/* Small floating blob decor */}
                        <div
                            className="absolute -top-10 left-10 w-16 h-16 bg-[#a855f7]/20 backdrop-blur-md rounded-full border border-white/10"
                            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                        ></div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-8 relative z-20">
                        <div className="flex items-center gap-2 text-[#a855f7] font-bold text-xs uppercase tracking-widest">
                            <Plus size={14} className="fill-current" />
                            <span>About Us</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                            We deliver innovative ideas to elevate digital agency <br />
                            <span className="text-[#a855f7]">and sharpen your brand</span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex.
                        </p>

                        <button className="group flex items-center gap-3 bg-[#a855f7] text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
                            Read More
                            <div className="bg-black text-white rounded-full p-1 group-hover:bg-[#a855f7] group-hover:text-white transition-colors">
                                <Plus size={20} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Counters Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-40 relative z-30">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10 flex flex-col items-center justify-center transition-all duration-700 group-hover:border-[#a855f7]/50 group-hover:bg-[#a855f7]/5 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="text-5xl md:text-6xl font-bold text-[#a855f7] mb-3 font-mono relative">
                                    <Counter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-gray-500 max-w-[120px] leading-tight group-hover:text-white transition-colors relative">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Section Intro */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/10 pt-20">
                    <div className="flex items-center gap-2 text-[#a855f7] font-bold text-xs uppercase tracking-widest">
                        <Plus size={14} className="fill-current" />
                        <span>Projects</span>
                    </div>
                    <div className="max-w-md">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                            diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </main >

            <style>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%; }
          50% { border-radius: 60% 40% 30% 70% / 70% 60% 40% 30%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 70%; }
        }
        
        * {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
        </div >
    );
};

export default AboutUs;