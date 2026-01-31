"use client";
import React, { useRef } from 'react';
import { ArrowUpRight, ArrowRight, Star } from 'lucide-react';
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { MarqueeTape } from './tapeAnimation';

// Custom Three Dots Icon
const ThreeDots = ({ dotColor = "white" }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="7" r="2.5" fill={dotColor} />
        <circle cx="8" cy="17" r="2.5" fill={dotColor} />
        <circle cx="18" cy="12" r="2.5" fill={dotColor} />
    </svg>
);

const ServiceCard = ({ title, icon, isHighlighted, index, startAnimation }) => {
    return (
        <div
            className={`min-w-full md:min-w-[calc((100%-48px)/3)] flex flex-col items-center opacity-0 relative group ${startAnimation ? 'animate-slide-up' : ''}`}
            style={{
                animationDelay: `${(index + 1) * 200 + 1500}ms`,
                animationFillMode: 'forwards'
            }}
        >
            {/* The main card body with overflow hidden for the snake effect */}
            <div className="w-full h-[400px] rounded-[32px] relative overflow-hidden transition-all duration-500">

                {/* Snake Border Layer - Thicker and Glowing (Updated to Vibrant Blue) */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20%,#3B82F6_30%,#3B82F6_35%,transparent_45%,transparent_70%,#3B82F6_80%,#3B82F6_85%,transparent_95%)] animate-snake-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
                </div>

                {/* Card Content Overlay */}
                <div className={`absolute inset-[3px] rounded-[calc(2rem-3px)] z-10 flex flex-col items-center justify-center transition-colors duration-500 ${isHighlighted ? 'bg-[#151515]' : 'bg-[#0f0f0f]'
                    }`}>
                    <div className="mb-10 transform group-hover:scale-110 transition-transform duration-700">
                        {icon}
                    </div>

                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[180px] relative z-20">
                        {title}
                    </h3>
                </div>

                {/* Default Subtle Border */}
                <div className={`absolute inset-0 rounded-[32px] border-[2px] pointer-events-none transition-opacity duration-500 z-20 ${isHighlighted ? 'border-[#3B82F6]/30' : 'border-white/5'
                    } group-hover:opacity-0`}></div>
            </div>

            {/* Professional Bottom Indicator - Updated to Vibrant Blue with Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500 z-40 shadow-[0_0_25px_rgba(59,130,246,0.6)] bg-[#3B82F6] scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <ArrowRight size={20} strokeWidth={3} />
            </div>
        </div>
    );
};

const AnimatedText = ({ text, delayOffset = 0, startAnimation }) => {
    return (
        <span className="inline-block">
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className={`inline-block opacity-0 ${startAnimation ? 'animate-slow-fade' : ''}`}
                    style={{
                        animationDelay: `${delayOffset + (i * 50)}ms`,
                        animationFillMode: 'forwards',
                        whiteSpace: char === " " ? "pre" : "normal"
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

const Services = () => {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 0.5], ["-60%", "0%"]);

    const wavyBackground = {
        initial: { clipPath: 'circle(0% at 90% 50%)' },
        hover: {
            clipPath: 'circle(150% at 90% 50%)',
            transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
        }
    };

    const floatingAnimation = {
        y: [0, -45, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const float4D = {
        x: [0, 15, 0, -15, 0],
        y: [0, -15, 0, 15, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const services = [
        // ... (services data remains same)
        {
            title: "Project & Product Consulting",
            icon: (
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#ffffff' }} />
                            <stop offset="100%" style={{ stopColor: '#555555' }} />
                        </linearGradient>
                    </defs>
                    <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="url(#grad1)" opacity="0.9" />
                    <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="white" opacity="0.3" />
                </svg>
            )
        },
        {
            title: "Web Application Development",
            isHighlighted: true,
            icon: (
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path d="M20 30 C20 30 35 90 50 90 C65 90 80 30 80 30" stroke="url(#grad1)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="40" r="18" fill="white" opacity="0.15" />
                </svg>
            )
        },
        {
            title: "Creative Content Production",
            icon: (
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <rect x="25" y="25" width="50" height="50" rx="6" transform="rotate(45 50 50)" fill="url(#grad1)" />
                    <rect x="30" y="30" width="40" height="40" rx="4" transform="rotate(-45 50 50)" fill="white" opacity="0.2" />
                </svg>
            )
        },
        {
            title: "UI/UX Design Strategy",
            icon: (
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="35" stroke="url(#grad1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="15" fill="white" opacity="0.2" />
                </svg>
            )
        },
        {
            title: "Cloud Infrastructure",
            icon: (
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path d="M20 70 L50 20 L80 70 Z" fill="url(#grad1)" />
                    <path d="M35 70 L50 45 L65 70 Z" fill="black" opacity="0.3" />
                </svg>
            )
        }
    ];

    return (
        <div ref={sectionRef} className="relative w-full pt-40 pb-20 bg-[#050505] text-white flex flex-col items-center justify-center p-4 md:p-12 font-sans overflow-hidden">

            {/* Background SERVICES Text */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 w-full flex justify-center">
                <h1 className="text-[15rem] md:text-[24rem] font-black text-white opacity-[0.05] leading-none tracking-tighter"
                    style={{ WebkitTextStroke: '0px transparent' }}>
                    SERVICES
                </h1>
            </div>

            {/* Main Container with Global Snake Border (Vibrant Blue) */}
            <div className="relative w-full max-w-[1400px] rounded-[50px] overflow-hidden p-[4px] group/main shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
                {/* Main Snake Border Animation */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_40%,#3B82F6_50%,transparent_60%)] animate-snake-border-slow blur-xl opacity-40"></div>
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_40%,#3B82F6_50%,transparent_60%)] animate-snake-border-slow"></div>
                </div>

                {/* Floating Arrow Image - Left Side */}
                <motion.div
                    animate={floatingAnimation}
                    className="absolute top-190 -left-0 z-20 pointer-events-none hidden xl:block"
                >
                    <img
                        src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769858821/arrow_png_htywsx.png"
                        alt="Arrow"
                        className="w-58 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] rotate-1"
                    />
                </motion.div>

                <div className="bg-[#0c0c0c] rounded-[46px] p-8 md:p-20 w-full h-full relative z-10 overflow-hidden">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full animate-pulse shadow-[0_0_15px_#3B82F6]"></div>
                                <span className="text-sm uppercase tracking-[0.3em] font-bold text-gray-500">Our Expertise</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                                <AnimatedText text="We provide digital services " delayOffset={200} startAnimation={isInView} />
                                <br />
                                <span className="text-[#3B82F6] drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    <AnimatedText text="for you" delayOffset={1500} startAnimation={isInView} />
                                </span>
                            </h2>
                        </div>

                        <div className={`max-w-sm space-y-8 mt-0`} style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                            <motion.span
                                style={{
                                    WebkitTextStroke: '1px white',
                                    x: xTransform,
                                    opacity: isInView ? 1 : 0,
                                    transition: "opacity 1s ease-out"
                                }}
                                className="text-transparent font-bold text-8xl uppercase tracking-wider block inline-block -mt-[80%]"
                            >
                                SERVICES
                            </motion.span>
                            <motion.button
                                initial="initial"
                                whileHover="hover"
                                className="relative group flex items-center gap-4 pl-7 pr-2 py-2 rounded-full font-bold text-sm overflow-hidden bg-violet-500 text-black border border-transparent hover:border-white/10 transition-colors duration-300 shadow-lg shadow-violet-500/20"
                            >
                                <motion.div variants={wavyBackground} className="absolute inset-0 bg-[#050b1a] z-0" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300 uppercase">View All Services</span>
                                <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#050b1a] group-hover:bg-violet-500">
                                    <div className="group-hover:hidden block"><ThreeDots dotColor="white" /></div>
                                    <div className="hidden group-hover:block"><ThreeDots dotColor="black" /></div>
                                </div>
                            </motion.button>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Transforming ideas into digital reality with cutting-edge technology and world-class design standards.
                            </p>
                        </div>
                    </div>

                    {/* Horizontal Scrollable Row - Exactly 3 visible */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-20 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing relative"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} startAnimation={isInView} />
                        ))}
                    </div>

                    {/* Footer UI */}
                    <div className={`flex flex-col items-center gap-10 opacity-0 ${isInView ? 'animate-fade-in' : ''}`} style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                        <div className="flex gap-3">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 1 ? 'w-12 bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]' : 'w-1.5 bg-white/10'}`}></div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 py-4 px-8 bg-white/[0.03] rounded-full border border-white/5 backdrop-blur-sm">
                            <span className="bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Limited Offer</span>
                            <p className="text-gray-400 font-medium">
                                Let's make something great together —
                                <a href="#" className="text-white font-bold ml-2 underline decoration-[#3B82F6] decoration-2 underline-offset-8 hover:text-[#3B82F6] transition-colors">
                                    Get A Free Quote
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Violet Tape with Gemini Icon */}
            <div className="relative w-full h-32 flex items-center justify-center z-30 pointer-events-none mt-20">
                <MarqueeTape
                    words={["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"]}
                    gradientClasses="bg-violet-600"
                    textColor="text-white"
                    fontClasses="font-semibold"
                    rotation={0}
                    separator={<Star className="w-8 h-8 text-white fill-white" />}
                />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes slow-fade {
          from { opacity: 0; transform: translateY(20px) filter(blur(5px)); }
          to { opacity: 1; transform: translateY(0) filter(blur(0)); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes snake-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-slow-fade {
          animation: slow-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-snake-border {
          animation: snake-border 3s linear infinite;
        }

        .animate-snake-border-slow {
          animation: snake-border 10s linear infinite;
        }
      `}} />
        </div>
    );
};

export default Services;