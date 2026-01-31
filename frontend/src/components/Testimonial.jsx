import React from 'react';

const Testimonial = () => {
    return (
        <section className="w-full min-h-[60vh] bg-black flex flex-col justify-center items-center py-20 px-6 border-b border-zinc-900">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-12">What they say</h2>
            <blockquote className="max-w-4xl text-center">
                <p className="text-2xl md:text-5xl font-serif text-white leading-tight">
                    &quot;Akkurate transformed our digital presence. The attention to detail and creative direction was exactly what we needed to stand out.&quot;
                </p>
                <footer className="mt-10">
                    <cite className="text-lg text-zinc-400 font-light not-italic">- John Doe, CEO of FutureCorp</cite>
                </footer>
            </blockquote>
        </section>
    );
};

export default Testimonial;
