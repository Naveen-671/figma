"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SiOpenai, SiNvidia, SiGoogle, SiMeta, SiAnthropic, SiDocker, SiNextdotjs } from "react-icons/si";

// Dynamically import heavy interactive components
const CircularGallery = dynamic(() => import("./animations/CircularGallery"), { ssr: false });
const Stack = dynamic(() => import("./animations/Stack"), { ssr: false });

const testimonials = [
    <div key="1" className="w-full h-full bg-black/80 p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group backdrop-blur-sm">
        <Image src="/landing/img/abstract2.webp" alt="bg" fill className="opacity-30 object-cover absolute inset-0 -z-10 group-hover:scale-110 transition-transform duration-700" />
        <p className="text-xl font-medium leading-relaxed relative z-10">"DevForge bridges the gap between design and development perfectly. It's the workflow engine I've been waiting for."</p>
        <div className="flex items-center gap-4 relative z-10 mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image src="/landing/img/person9.webp" alt="Alex" fill className="object-cover" />
            </div>
            <div>
                <p className="font-bold text-white">Alex Chen</p>
                <p className="text-sm text-secondary">Product Lead at TechFlow</p>
            </div>
        </div>
    </div>,
    <div key="2" className="w-full h-full bg-black/80 p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group backdrop-blur-sm">
        <Image src="/landing/img/abstract6.webp" alt="bg" fill className="opacity-30 object-cover absolute inset-0 -z-10 group-hover:scale-110 transition-transform duration-700" />
        <p className="text-xl font-medium leading-relaxed relative z-10">"The AI generation is shockingly accurate. It saved our team days of boilerplate coding in just the first week."</p>
        <div className="flex items-center gap-4 relative z-10 mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image src="/landing/img/person10.webp" alt="Sarah" fill className="object-cover" />
            </div>
            <div>
                <p className="font-bold text-white">Sarah Jones</p>
                <p className="text-sm text-secondary">Sr. Frontend Dev</p>
            </div>
        </div>
    </div>,
    <div key="3" className="w-full h-full bg-black/80 p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group backdrop-blur-sm">
        <Image src="/landing/img/abstract4.webp" alt="bg" fill className="opacity-30 object-cover absolute inset-0 -z-10 group-hover:scale-110 transition-transform duration-700" />
        <p className="text-xl font-medium leading-relaxed relative z-10">"Finally, a tool that understands both Figma nuances and clean React code structure. A game changer."</p>
        <div className="flex items-center gap-4 relative z-10 mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image src="/landing/img/person11.webp" alt="Mike" fill className="object-cover" />
            </div>
            <div>
                <p className="font-bold text-white">Mike Ross</p>
                <p className="text-sm text-secondary">Design Systems Lead</p>
            </div>
        </div>
    </div>,
    <div key="4" className="w-full h-full bg-black/80 p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group backdrop-blur-sm">
        <Image src="/landing/img/abstract9.webp" alt="bg" fill className="opacity-30 object-cover absolute inset-0 -z-10 group-hover:scale-110 transition-transform duration-700" />
        <p className="text-xl font-medium leading-relaxed relative z-10">"The real-time collaboration via Liveblocks makes pair programming and design reviews seamless."</p>
        <div className="flex items-center gap-4 relative z-10 mt-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image src="/landing/img/person103.webp" alt="Emily" fill className="object-cover" />
            </div>
            <div>
                <p className="font-bold text-white">Emily White</p>
                <p className="text-sm text-secondary">CTO at StartupX</p>
            </div>
        </div>
    </div>
];

const galleryItems = [
    { image: "/landing/img/amazon.png", text: 'E-commerce' },
    { image: "/landing/img/HP dashboard.png", text: 'Dashboard' },
    { image: "/landing/img/netflix.png", text: 'Streaming' },
    { image: "/landing/img/landing page.png", text: 'Landing Page' },
    { image: "/landing/img/profile page.png", text: 'Profile' },
    { image: "/landing/img/portfolio.png", text: 'Portfolio' },
    { image: "/landing/img/github.png", text: 'GitHub' },
    { image: "/landing/img/eleven labs.png", text: 'AI Voice' },
    { image: "/landing/img/hostinger.png", text: 'Hosting' }
];

export default function LandingFeatures() {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    return (
        <>
            {/* Lightbox Overlay */}
            {expandedImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setExpandedImage(null)}
                >
                    <div className="relative w-full max-w-6xl h-[80vh] rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <Image
                            src={expandedImage}
                            alt="Expanded View"
                            fill
                            className="object-contain"
                            priority
                        />
                        <button
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                            onClick={() => setExpandedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Visual showcase with Circular Gallery */}
            <div className="w-full relative bg-black text-white py-vh-5 overflow-hidden">
                <div className="container mx-auto px-vw-5 mb-12 text-center" data-aos="fade-down">
                    <span className="text-xl text-secondary font-light">Infinite Possibilities</span>
                    <h2 className="display-4 mt-4">Craft Any Experience</h2>
                </div>
                <div className="w-full h-[600px] relative" data-aos="fade-up">
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.05}
                        onItemClick={(item: any) => setExpandedImage(item.image)}
                    />
                </div>
            </div>

            {/* Features split */}
            <div className="bg-dark relative z-10">
                <div className="container mx-auto px-vw-5 py-vh-5">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="w-full md:w-1/2 text-right" data-aos="fade-right">
                            <span className="text-xl text-secondary font-light">
                                What We Offer
                            </span>
                            <h2 className="display-4 mt-4">
                                Two powerful platforms, one unified experience for modern
                                development teams
                            </h2>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade-left">
                            <div className="pt-5">
                                <h3 className="text-2xl font-semibold mb-3">
                                    Figma - Collaborative Web Designer
                                </h3>
                                <p className="text-secondary mb-4">
                                    Design interfaces together in real-time with Fabric.js-powered
                                    canvas and Liveblocks presence. Create, share, and iterate on
                                    designs with your entire team simultaneously.
                                </p>
                                <a
                                    href="/dashboard"
                                    className="link-fancy text-white inline-flex items-center gap-2"
                                >
                                    Explore Design Tools
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="pt-12 mt-12 border-t border-secondary">
                                <h3 className="text-2xl font-semibold mb-3">
                                    Vibe - AI Code Generation
                                </h3>
                                <p className="text-secondary mb-4">
                                    Transform ideas into production code instantly. Switch between
                                    OpenAI, Nvidia, Gemini, Mistral, and Llama models. Generate
                                    Next.js TypeScript apps or HTML/CSS with live preview in Docker
                                    and e2b sandbox environments.
                                </p>
                                <a
                                    href="http://localhost:3000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-fancy text-white inline-flex items-center gap-2"
                                >
                                    Try Code Generator
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials / Stats Section with Stack Animation */}
            <div className="container-fluid px-vw-5 relative" data-aos="fade">
                <div className="absolute w-full h-50 bg-black top-0 left-0"></div>
                <div className="relative py-vh-5 bg-cover bg-center rounded-5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/landing/img/abstract12.webp)" }}></div>

                    <div className="container relative z-10 bg-black px-vw-5 py-vh-3 rounded-5 shadow">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Stack Animation for Testimonials */}
                            <div className="w-full md:w-1/2 h-[400px]" data-aos="zoom-in-up">
                                <Stack
                                    randomRotation={true}
                                    sensitivity={180}
                                    sendToBackOnClick={true}
                                    cards={testimonials}
                                />
                            </div>

                            <div className="w-full md:w-1/2 md:pl-12">
                                <span className="h5 text-secondary font-light">The Numbers</span>
                                <h2 className="display-huge font-bold flex items-baseline gap-2" data-aos="zoom-in-left">
                                    10x
                                </h2>
                                <p className="h4 font-light text-secondary mb-12">
                                    Faster iteration cycles
                                </p>

                                <h2 className="display-huge font-bold flex items-baseline gap-2 pt-12 border-t border-secondary" data-aos="zoom-in-left">
                                    6+
                                </h2>
                                <p className="h4 font-light text-secondary mb-12">
                                    AI Models Integrated
                                </p>

                                <h2 className="display-huge font-bold flex items-baseline gap-2 pt-12 border-t border-secondary" data-aos="zoom-in-left">
                                    100%
                                </h2>
                                <p className="h4 font-light text-secondary">
                                    Unified Workflow
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-black">
                <div className="container mx-auto px-vw-5 py-vh-5">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-5/12 text-center md:text-right" data-aos="zoom-in-right">
                            <span className="text-xl text-secondary font-light">
                                Simple Pricing
                            </span>
                            <h2 className="display-4 mt-4">
                                One simple plan for your entire team
                            </h2>
                        </div>
                        <div className="w-full md:w-7/12 bg-dark rounded-5 py-16 text-center shadow transform transition-transform hover:scale-105" data-aos="zoom-in-up">
                            <h2 className="display-huge mb-8">
                                <span className="text-4xl mr-2 font-light">$</span>
                                <span className="border-b-4 border-white pb-2">0</span>
                                <span className="text-xl font-light ml-2">/open source</span>
                            </h2>
                            <p className="text-xl text-secondary px-8 mb-8 max-w-xl mx-auto">
                                DevForge is completely free and open source. Deploy locally, host it yourself, and build without limits.
                            </p>
                            <a href="/dashboard" className="btn-xl bg-white text-black hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                                Get Started Free
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack / "Under the Hood" Section - Card Style */}
            <div className="bg-black py-vh-5 relative overflow-hidden">
                <div className="container mx-auto px-vw-5">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Cards Column */}
                        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1: Liveblocks */}
                            <div className="group bg-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="0">
                                <div className="h-48 relative overflow-hidden">
                                    <Image src="/landing/img/abstract9.webp" alt="Real-time" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                    <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                                        {/* Liveblocks SVG */}
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#F55D42]">
                                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold mb-3">Real-time Collab</h3>
                                    <p className="text-secondary mb-6 line-clamp-3">
                                        Built with Liveblocks to enable seamless multiplayer editing, cursor presence, and instant state synchronization across the team.
                                    </p>
                                    <span className="text-white text-sm font-medium border-b border-white pb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                        Read more
                                    </span>
                                </div>
                            </div>

                            {/* Card 2: AI Models */}
                            <div className="group bg-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors md:mt-12" data-aos="fade-up" data-aos-delay="100">
                                <div className="h-48 relative overflow-hidden">
                                    <Image src="/landing/img/abstract12.webp" alt="AI Models" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                    <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                                        <SiOpenai className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold mb-3">Multi-Model AI</h3>
                                    <p className="text-secondary mb-6 line-clamp-3">
                                        Switch instantly between OpenAI, Nvidia, Gemini, Mistral, and Anthropic models to find the perfect fit for your code generation needs.
                                    </p>
                                    <span className="text-white text-sm font-medium border-b border-white pb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                        Read more
                                    </span>
                                </div>
                            </div>

                            {/* Card 3: Next.js */}
                            <div className="group bg-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="200">
                                <div className="h-48 relative overflow-hidden">
                                    <Image src="/landing/img/abstract6.webp" alt="Next.js" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                    <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                                        <SiNextdotjs className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold mb-3">Next.js Powered</h3>
                                    <p className="text-secondary mb-6 line-clamp-3">
                                        Leveraging the latest Next.js 15 App Router, Server Actions, and Turbopack for lightning-fast performance and SEO optimization.
                                    </p>
                                    <span className="text-white text-sm font-medium border-b border-white pb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                        Read more
                                    </span>
                                </div>
                            </div>

                            {/* Card 4: Docker */}
                            <div className="group bg-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors md:mt-12" data-aos="fade-up" data-aos-delay="300">
                                <div className="h-48 relative overflow-hidden">
                                    <Image src="/landing/img/abstract4.webp" alt="Docker" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                    <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                                        <SiDocker className="w-8 h-8 text-[#2496ED]" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold mb-3">Secure Execution</h3>
                                    <p className="text-secondary mb-6 line-clamp-3">
                                        Every project runs in its own isolated Docker container via E2B, ensuring security and consistency for full-stack applications.
                                    </p>
                                    <span className="text-white text-sm font-medium border-b border-white pb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                        Read more
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Text Column (Sticky) */}
                        <div className="w-full lg:w-2/5 lg:sticky lg:top-32" data-aos="fade-left">
                            <span className="text-xl text-secondary font-light block mb-4">
                                Under the Hood
                            </span>
                            <h2 className="display-4 font-bold leading-tight mb-8">
                                Built on the world's most advanced technologies.
                            </h2>
                            <p className="text-xl text-secondary mb-12 leading-relaxed">
                                We've combined the power of generative AI with battle-tested collaborative tools to create a development environment that feels like the future.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                                    TypeScript
                                </div>
                                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                                    Prisma
                                </div>
                                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                                    Tailwind CSS
                                </div>
                                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                                    Auth.js
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
