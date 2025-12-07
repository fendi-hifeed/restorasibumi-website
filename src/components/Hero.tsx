"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 hover:bg-white hover:text-primary transition-all">
                <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 hover:bg-white hover:text-primary transition-all">
                <ChevronRight size={24} />
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                            Memulihkan Bumi,<br />
                            <span className="text-gray-900">Mengembalikan Harapan.</span>

                        </h1>
                        <p className="text-base md:text-lg text-accent font-semibold tracking-wide">
                            Regenerate. Rebuild. Rise.
                        </p>

                        {/* Removed detailed paragraph and hashtags per design brief */}

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/30"
                            >
                                Pelajari Lebih Lanjut
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-lg mx-auto animate-float">
                            {/* Main Illustration */}
                            <Image
                                src="/hero-illustration.png"
                                alt="Nature Restoration Illustration"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
