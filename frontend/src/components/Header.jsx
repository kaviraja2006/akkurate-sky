"use client";
import React, { useState } from 'react';
import TapeAnimation from './tapeAnimation';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, ArrowDownLeft, Star, Menu, X } from 'lucide-react';

/**
 * Modern Digital Marketing Agency Header & Hero
 * Updated: 
 * - Added Scroll-Linked Rotation for the decorative chrome image.
 * - Used useSpring for a smooth, "flowing" transition during scroll.
 * - Maintained the 4x enlarged decorative chrome image and floating effect.
 */

// Navigation Data
const NAV_ITEMS = [
    {
        name: 'Home',
        submenu: ['Digital Agency', 'Creative Studio', 'Marketing Hub', 'Portfolio Home']
    },
    {
        name: 'Home Others',
        submenu: ['Corporate', 'Startup', 'Personal Brand', 'Landing Page']
    },
    {
        name: 'Pages',
        submenu: ['About Us', 'Our Team', 'Pricing', 'FAQs', 'Contact']
    },
    {
        name: 'Services',
        submenu: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Paid Ads']
    },
    {
        name: 'Projects',
        submenu: ['Case Studies', 'Recent Works', 'Client Reviews']
    },
    {
        name: 'News',
        submenu: ['Latest Blog', 'Company Updates', 'Press Release']
    }
];

// Custom Three Dots Icon
const ThreeDots = ({ dotColor = "white" }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="7" r="2.5" fill={dotColor} />
        <circle cx="8" cy="17" r="2.5" fill={dotColor} />
        <circle cx="18" cy="12" r="2.5" fill={dotColor} />
    </svg>
);

const NavItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20, y: 10, filter: "blur(4px)" },
        visible: {
            opacity: 1, x: 0, y: 0, filter: "blur(0px)",
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="flex items-center gap-1 hover:text-violet-400 transition-colors duration-300 py-6 font-semibold tracking-wide">
                {item.name}
            </button>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-[80%] left-[-10px] pt-4 w-64 z-[100]"
                    >
                        <div className="bg-[#0a0f1d]/90 border border-white/10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl p-4">
                            <div className="flex flex-col gap-1">
                                {item.submenu.map((sub) => (
                                    <motion.a
                                        key={sub}
                                        variants={itemVariants}
                                        whileHover={{ x: 8, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                                        href="#"
                                        className="px-4 py-3 rounded-2xl text-[14px] font-medium text-blue-100/60 hover:text-white transition-all duration-300 flex items-center justify-between group/sub"
                                    >
                                        <span>{sub}</span>
                                        <motion.div initial={{ opacity: 0, x: -5 }} whileHover={{ opacity: 1, x: 0 }}>
                                            <ArrowDownLeft size={16} className="-rotate-135 text-violet-400" />
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </div>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Scroll logic for rotation
    const { scrollYProgress } = useScroll();
    const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const smoothRotate = useSpring(rotateTransform, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const wavyBackground = {
        initial: { clipPath: 'circle(0% at 90% 50%)' },
        hover: {
            clipPath: 'circle(150% at 90% 50%)',
            transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
        }
    };

    const floatingAnimation = {
        y: [0, -25, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const bgImageUrl = "https://res.cloudinary.com/ddnxhn442/image/upload/v1769850026/da456829e827fd17c98ca83eea1f5d91_jxudnf.jpg";
    const decoImageUrl = "https://res.cloudinary.com/ddnxhn442/image/upload/v1769847944/akkurate_g55qvc.png";

    return (
        <div
            className="w-full text-white font-sans selection:bg-violet-500 selection:text-white relative bg-[#050b1a]"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(5, 11, 26, 0.75), rgba(5, 11, 26, 0.85)), url(${bgImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll' /* Changed from fixed to scroll to allow normal document flow */
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b1a]/90 via-transparent to-[#050b1a]/90 pointer-events-none" />

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-full h-32 bg-[#050b1a] z-[1000] border-b border-white/10 shadow-2xl flex items-center px-6 md:px-12 lg:px-20"
                    >
                        <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between gap-8">
                            <div className="flex-1 relative group">
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search projects..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 text-lg focus:outline-none focus:border-violet-500/50 transition-all placeholder:text-blue-100/20"
                                />
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/30 group-focus-within:text-violet-400 transition-colors" size={20} />
                            </div>
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-3 hover:bg-white/5 rounded-full transition-colors group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation */}
            <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
                <nav className="flex items-center justify-between px-6 py-0 md:px-12 lg:px-20 max-w-screen-2xl mx-auto h-14 md:h-16">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769895740/b0165f24-1138-4fc4-a451-b6e71186ff29.png"
                            alt="Akkurate Logo"
                            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">AKKURATE</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-blue-100/70">
                        {NAV_ITEMS.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden md:block hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
                        >
                            <Search size={20} />
                        </button>

                        <motion.button
                            initial="initial"
                            whileHover="hover"
                            className="relative group flex items-center gap-4 pl-7 pr-2 py-2 rounded-full font-bold text-sm overflow-hidden bg-violet-500 text-black border border-transparent hover:border-white/10 transition-colors duration-300 shadow-lg shadow-violet-500/20"
                        >
                            <motion.div variants={wavyBackground} className="absolute inset-0 bg-[#050b1a] z-0" />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                            <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#050b1a] group-hover:bg-violet-500">
                                <div className="group-hover:hidden block"><ThreeDots dotColor="white" /></div>
                                <div className="hidden group-hover:block"><ThreeDots dotColor="black" /></div>
                            </div>
                        </motion.button>

                        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Content */}
            <section className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 pt-2 pb-0 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div
                    className="hidden xl:flex flex-col gap-2 text-blue-200/40 font-semibold text-sm uppercase tracking-wider"
                >
                    <p>Innovate</p>
                    <p className="text-white">Marketing Agency</p>
                    <p>That Drives</p>
                    <p className="text-white">Performance</p>
                    <motion.div
                        whileHover={{ scale: 1.1, x: -5, y: 5 }}
                        className="mt-12 cursor-pointer w-max"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <ArrowDownLeft size={64} className="text-blue-400 opacity-80" />
                    </motion.div>
                </div>

                <div className="flex-1 text-center lg:text-left relative">
                    {/* Floating Rocket Image */}
                    <motion.div
                        animate={floatingAnimation}
                        className="absolute -top-32 right-10 z-0 opacity-80 pointer-events-none hidden lg:block"
                    >
                        <img
                            src="https://res.cloudinary.com/ddnxhn442/image/upload/v1769853465/rocket_png_j3jlah.png"
                            alt="Rocket"
                            className="w-78 object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.3)] rotate-45"
                        />
                    </motion.div>

                    <div className="absolute -top-16 left-0 text-violet-400 opacity-40 hidden lg:block">
                        <Star size={40} fill="currentColor" />
                    </div>

                    <h1 className="text-7xl md:text-9xl lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase mb-4 text-white drop-shadow-2xl">Digital</h1>
                    <h1 className="text-7xl md:text-9xl lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 drop-shadow-2xl">Marketing</h1>

                    <p className="max-w-lg mx-auto lg:mx-0 text-blue-100/70 text-base md:text-lg leading-relaxed mb-12 font-medium">
                        Elevate your brand presence with cutting-edge strategies and immersive
                        digital experiences tailored for the modern landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-full border-2 border-[#050b1a] overflow-hidden bg-blue-900/50 shadow-lg cursor-pointer transition-all"
                                >
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 45}`} alt="User" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 border-l border-white/20 pl-8">
                            <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300">200k+</span>
                            <span className="text-[13px] text-blue-100/60 uppercase font-bold leading-tight text-left tracking-wider">Satisfied<br />Partners</span>
                        </div>

                        {/* Vision Badge - Scaled Up & Floating */}
                        <motion.div
                            animate={floatingAnimation}
                            className="relative w-64 h-64 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 animate-spin-slow pointer-events-none opacity-60">
                                <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-100/50 uppercase text-[12px] font-black tracking-[0.25em]">
                                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " fill="none" />
                                    <text><textPath xlinkHref="#circlePath">Our Vision • Our Vision •</textPath></text>
                                </svg>
                            </div>
                            <motion.button
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                whileHover={{ scale: 1.15, rotate: -45 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative z-10 w-28 h-28 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center -rotate-45 shadow-2xl shadow-blue-500/40 group border border-white/10 cursor-pointer"
                                aria-label="Scroll to Vision"
                            >
                                <ArrowDownLeft size={48} className="text-white group-hover:translate-x-[-2px] group-hover:translate-y-[2px] transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Image on the Right - Now with Scroll-Linked Smooth Rotation */}
                <motion.div
                    animate={floatingAnimation}
                    style={{ rotate: smoothRotate }}
                    className="hidden lg:block relative w-[1200px] h-[1200px] right-[-100px]"
                >
                    <img
                        src={decoImageUrl}
                        alt="Agency Decoration"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_100px_rgba(139,92,246,0.3)]"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/10 blur-[150px] -z-10 rounded-full" />
                </motion.div>
            </section>
            {/* Tape Animation at the bottom */}
            <div className="relative w-full z-20 pb-10 -mt-24">
                <TapeAnimation />
            </div>
        </div>
    );
};

export default Header;