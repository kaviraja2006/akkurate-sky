import React from 'react';

/**
 * A reusable Marquee component that creates a seamless horizontal scrolling effect.
 * @param {string} text - The text to display.
 * @param {string} gradientClasses - Tailwind gradient classes.
 * @param {string} textColor - Tailwind text color class.
 * @param {number} rotation - Rotation angle in degrees.
 * @param {boolean} reverse - Whether to scroll in the opposite direction.
 * @param {number} speed - Duration of the animation in seconds.
 * @param {string} zIndex - Z-index for layering.
 * @param {string} origin - The pivot point for the rotation (to control intersection).
 */
export const MarqueeTape = ({
    text = "AKKURATE",
    words = [], // Optional array of words to cycle through
    gradientClasses = "bg-white",
    textColor = "text-slate-900",
    fontClasses = "font-black", // Default font weight
    rotation = 0,
    reverse = false,
    speed = 40,
    zIndex = "z-10",
    origin = "center center",
    separator = (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 sm:w-10 sm:h-10 ${textColor}`}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
    )
}) => {
    // If words are provided, we repeat the generic items array but map index to word
    // To ensure smooth loop with specific list, we might need a different strategy, 
    // but for simple use case, we can just repeat the list enough times.

    // Create a list that covers enough width. 
    // If words provided, repeat that list. If not, repeat 'text'.

    const baseList = words.length > 0 ? words : Array(10).fill(text);
    // Repeat the base list a few times to ensure it covers 120% width + scroll
    const displayList = [...baseList, ...baseList, ...baseList, ...baseList];

    return (
        <div
            className={`absolute w-[120%] -left-[10%] overflow-hidden py-4 sm:py-6 shadow-2xl border-y border-black/5 ${gradientClasses} ${zIndex}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: origin
            }}
        >
            <div className="flex whitespace-nowrap items-center">
                <div
                    className={`flex items-center space-x-8 sm:space-x-12 animate-scroll-${reverse ? 'right' : 'left'}`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {displayList.map((itemText, i) => (
                        <React.Fragment key={i}>
                            <span className={`text-2xl sm:text-4xl md:text-5xl ${fontClasses} uppercase tracking-tighter ${textColor}`}>
                                {itemText}
                            </span>
                            <div className={`${textColor} w-6 h-6 sm:w-10 sm:h-10`}>
                                {separator}
                            </div>
                        </React.Fragment>
                    ))}
                    {/* Duplicate set for seamless loop (standard marquee technique involves duplicating content) 
                        Actually, displayList is already long, but keyframe animation moves -50%.
                        So we need exactly TWO identical blocks of content for the transformation.
                    */}
                </div>
                {/* Second identical block for the loop */}
                <div
                    className={`flex items-center space-x-8 sm:space-x-12 animate-scroll-${reverse ? 'right' : 'left'} ml-8 sm:ml-12`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {displayList.map((itemText, i) => (
                        <React.Fragment key={`dup-${i}`}>
                            <span className={`text-2xl sm:text-4xl md:text-5xl ${fontClasses} uppercase tracking-tighter ${textColor}`}>
                                {itemText}
                            </span>
                            <div className={`${textColor} w-6 h-6 sm:w-10 sm:h-10`}>
                                {separator}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ... MarqueeTape definition remains same, just modifying the export

export default function TapeAnimation() {
    // We set the origin to 85% width of the 120% wide element.
    const intersectionPoint = "85% center";

    return (
        <div className="relative w-full h-40 flex items-center justify-center overflow-visible z-20">
            {/* Main Container */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Blue/Violet Gradient Tape (Downlifted Angle) */}
                <MarqueeTape
                    text="THE BEST SOLUTION"
                    gradientClasses="bg-gradient-to-r from-blue-600 to-violet-600"
                    textColor="text-white"
                    rotation={3}
                    speed={45}
                    reverse={true}
                    zIndex="z-10"
                    origin={intersectionPoint}
                />

                {/* White/Grey Gradient Tape (Uplifted Angle) */}
                <MarqueeTape
                    text="Akkurate"
                    gradientClasses="bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
                    textColor="text-slate-950"
                    rotation={-2}
                    speed={50}
                    zIndex="z-20"
                    origin={intersectionPoint}
                />

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}} />
        </div>
    );
}

