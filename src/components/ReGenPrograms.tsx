"use client";

import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ReGenPrograms = () => {
    const { t } = useLanguage();

    return (
        <section id="programs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        {t.programs.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        {t.programs.subtitle}
                    </p>
                    <div className="max-w-4xl mx-auto text-left md:text-center">
                        <p className="text-gray-700 mb-4">
                            {t.programs.desc1}
                        </p>
                        <p className="text-gray-700 mb-2">
                            {t.programs.desc2}
                        </p>
                        <p className="text-gray-600">
                            {t.programs.desc3}
                        </p>
                    </div>
                </div>

                {/* ReGen Earth */}
                <div id="environment-programs" className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                {t.programs.earth.tag}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                {t.programs.earth.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {t.programs.earth.desc1}
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t.programs.earth.desc2}
                            </p>
                            <Link
                                href="https://kitahijaukan.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                {t.programs.earth.btn}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-200/50 rounded-full blur-3xl"></div>
                                <div className="absolute inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl"></div>
                                <Image
                                    src="/images/regen-earth.png"
                                    alt="ReGen Earth - Memulihkan Ekosistem"
                                    fill
                                    className="object-contain relative z-10 p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ReGen Humanity */}
                <div id="humanity-programs" className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-200/50 rounded-full blur-3xl"></div>
                                <div className="absolute inset-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl"></div>
                                <Image
                                    src="/images/regen-humanity.png"
                                    alt="ReGen Humanity - Menguatkan Masyarakat"
                                    fill
                                    className="object-contain relative z-10 p-4"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                {t.programs.humanity.tag}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                {t.programs.humanity.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t.programs.humanity.desc}
                            </p>
                            <Link
                                href="#donate"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                {t.programs.humanity.btn}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ReGen Future */}
                <div id="faith-programs" className="mb-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                {t.programs.future.tag}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                {t.programs.future.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {t.programs.future.desc1}
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t.programs.future.desc2}
                            </p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                {t.programs.future.btn}
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full blur-3xl"></div>
                                <div className="absolute inset-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-xl"></div>
                                <Image
                                    src="/images/regen-future.png"
                                    alt="ReGen Future - Membangun Generasi Masa Depan"
                                    fill
                                    className="object-contain relative z-10 p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReGenPrograms;
