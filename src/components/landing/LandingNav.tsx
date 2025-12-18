"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`landing-nav ${scrolled ? "scrolled" : ""}`}>
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                    </svg>
                    <span>DevForge</span>
                </Link>

                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <Link href="/" className="nav-link text-gray-300 hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard"
                            className="nav-link text-gray-300 hover:text-white"
                        >
                            Design
                        </Link>
                    </li>
                    <li>
                        <a
                            href="http://localhost:3000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link text-gray-300 hover:text-white"
                        >
                            Code
                        </a>
                    </li>
                    <li>
                        <Link href="/#docs" className="nav-link text-gray-300 hover:text-white">
                            Docs
                        </Link>
                    </li>
                </ul>

                <Link
                    href="/dashboard"
                    className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                    Get Started
                </Link>

                {/* Mobile menu button */}
                <button className="md:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
