import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto py-12 text-secondary">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold justify-center md:justify-start"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                            <span className="text-white">DevForge</span>
                        </Link>
                    </div>

                    {/* Products */}
                    <div>
                        <span className="text-lg font-semibold text-white block mb-3">
                            Products
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard" className="link-fancy hover:text-white">
                                    Figma Designer
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="http://localhost:3000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-fancy hover:text-white"
                                >
                                    Vibe Code Gen
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <span className="text-lg font-semibold text-white block mb-3">
                            Resources
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#docs" className="link-fancy hover:text-white">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/#" className="link-fancy hover:text-white">
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link href="/#" className="link-fancy hover:text-white">
                                    Examples
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <span className="text-lg font-semibold text-white block mb-3">
                            Company
                        </span>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#" className="link-fancy hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#" className="link-fancy hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/#" className="link-fancy hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-sm py-6 mt-8 border-t border-gray-800">
                    Built with ❤️ for developers who ship fast
                </div>
            </div>
        </footer>
    );
}
