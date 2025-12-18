"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("./animations/Antigravity"), { ssr: false });

export default function LandingHero() {
    return (
        <div className="relative w-full overflow-hidden bg-black text-white min-h-screen flex flex-col justify-center">
            <div className="absolute w-full h-full bg-black opacity-30 top-0 left-0 z-0">
                <Antigravity
                    count={300}
                    magnetRadius={15}
                    ringRadius={12}
                    waveSpeed={0.2}
                    waveAmplitude={2}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color={'#FF9FFC'} // Matching Vibe's aesthetic
                    autoAnimate={true}
                    particleVariance={1}
                />
            </div>
            {/* Gradient Overlay for Readability */}
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none z-0"></div>

            <div className="container mx-auto py-20 relative px-vw-5 text-center z-10 pointer-events-none">
                <div className="flex flex-col items-center justify-center pointer-events-auto">
                    <div className="w-full max-w-5xl" data-aos="fade-up">
                        <span className="text-xl text-secondary font-light tracking-widest uppercase mb-4 block">
                            The collaborative AI workspace
                        </span>
                        <h1 className="display-huge mt-3 mb-6 font-bold leading-tight">
                            Design together. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                Generate code instantly.
                            </span>
                        </h1>
                    </div>
                    <div className="w-full max-w-3xl" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-xl text-secondary leading-relaxed">
                            DevForge combines collaborative design tools with AI-powered code
                            generation. Create stunning interfaces with Figma-like canvas,
                            then transform them into production-ready code using Vibe's
                            multi-model AI engine.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8" data-aos="fade-up" data-aos-delay="400">
                        <Link href="/dashboard" className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-lg hover:scale-105 flex items-center gap-2">
                            Start Designing
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </Link>
                        <a
                            href="http://localhost:3000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Generate Code
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
