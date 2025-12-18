"use client";

import { useLanguage } from "../context/LanguageContext";
import { Leaf, Globe, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="section-line"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t.about.theoryOfChange}
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-900 mb-6 leading-tight">
                            {t.about.theoryHeading}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {t.about.theoryDesc}
                        </p>
                        <Link
                            href="#programs"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all group"
                        >
                            {t.about.readMore}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right - Circular Diagram */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Outer Ring */}
                            <div className="aspect-square rounded-full border-4 border-primary/80 p-6 relative">
                                <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center p-8 relative">

                                    {/* Inner Content */}
                                    <div className="text-center z-10">
                                        <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow-lg">
                                            <Leaf size={32} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary tracking-wide uppercase">{t.about.circularDiagram.center}</h3>
                                        <p className="text-sm text-gray-500 font-medium tracking-widest uppercase">{t.about.circularDiagram.centerSub}</p>
                                    </div>

                                    {/* Orbital Labels - Matched to Image Positions */}

                                    {/* Top Right - ReGen Earth */}
                                    <div className="absolute top-0 right-0 transform -translate-x-4 -translate-y-4">
                                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm transform rotate-6 border border-gray-100">
                                            <span className="text-xs font-bold text-accent tracking-widest">{t.about.circularDiagram.label1}</span>
                                        </div>
                                    </div>

                                    {/* Right - ReGen Humanity */}
                                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                        <div className="bg-primary text-white px-5 py-2 rounded-lg shadow-md">
                                            <span className="text-xs font-bold tracking-widest">{t.about.circularDiagram.label2}</span>
                                        </div>
                                    </div>

                                    {/* Bottom Right - ReGen Future */}
                                    <div className="absolute bottom-10 right-0 transform translate-x-2 translate-y-2">
                                        <div className="bg-navy text-white px-5 py-2 rounded-lg shadow-md transform -rotate-6">
                                            <span className="text-xs font-bold tracking-widest">{t.about.circularDiagram.label3}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Values */}
                    {/* Bottom Section - Values removed as per request */}
                </div>
            </div>
        </section>
    );
};

export default About;
