"use client";

import { useLanguage } from "../context/LanguageContext";
import { Target, Eye, Compass, Users, Lightbulb, Handshake } from "lucide-react";
import Image from "next/image";

const VisionMission = () => {
    const { t } = useLanguage();

    return (
        <section id="vision-mission" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Visi & Misi Section */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    {/* Visi */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-teal/5 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                                    <Eye size={28} className="text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.visionMission.vision}</h2>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                {t.visionMission.visionDesc}
                            </p>
                        </div>
                    </div>

                    {/* Misi */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal/10 to-accent/5 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-teal/25">
                                    <Target size={28} className="text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.visionMission.mission}</h2>
                            </div>
                            <ol className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">1</span>
                                    <p className="text-gray-700">{t.visionMission.mission1}</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">2</span>
                                    <p className="text-gray-700">{t.visionMission.mission2}</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">3</span>
                                    <p className="text-gray-700">{t.visionMission.mission3}</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">4</span>
                                    <p className="text-gray-700">{t.visionMission.mission4}</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* How We Work Section */}
                <div id="how-we-work" className="bg-gradient-to-br from-primary/5 via-white to-teal/5 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal/10 rounded-full blur-2xl"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Content */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-navy rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                                    <Compass size={28} className="text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.visionMission.howWeWork}</h2>
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4">
                                {t.visionMission.howWeWorkHeading}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                {t.visionMission.howWeWorkDesc1}
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {t.visionMission.howWeWorkDesc2}
                            </p>

                            <div className="bg-gradient-to-r from-primary to-teal p-6 rounded-2xl shadow-lg">
                                <p className="text-white font-semibold mb-2">{t.visionMission.howWeWorkMotto}</p>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {t.visionMission.howWeWorkMottoDesc}
                                </p>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md">
                                {/* Road illustration with milestones */}
                                <svg viewBox="0 0 400 350" className="w-full h-auto">
                                    {/* Road Path */}
                                    <path
                                        d="M50,300 Q100,250 150,280 Q200,310 250,250 Q300,190 350,220 Q400,250 380,150 Q360,50 300,80"
                                        fill="none"
                                        stroke="#374151"
                                        strokeWidth="40"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M50,300 Q100,250 150,280 Q200,310 250,250 Q300,190 350,220 Q400,250 380,150 Q360,50 300,80"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="4"
                                        strokeDasharray="20,15"
                                        strokeLinecap="round"
                                    />

                                    {/* Milestone 1 - Orange */}
                                    <circle cx="150" cy="280" r="20" fill="#f97316" />
                                    <circle cx="150" cy="280" r="12" fill="#fed7aa" />

                                    {/* Milestone 2 - Yellow/Green */}
                                    <circle cx="280" cy="230" r="20" fill="#84cc16" />
                                    <circle cx="280" cy="230" r="12" fill="#ecfccb" />

                                    {/* Milestone 3 - Teal */}
                                    <circle cx="370" cy="170" r="20" fill="#14b8a6" />
                                    <circle cx="370" cy="170" r="12" fill="#ccfbf1" />

                                    {/* Milestone 4 - Primary */}
                                    <circle cx="310" cy="90" r="24" fill="#0d9488" />
                                    <circle cx="310" cy="90" r="14" fill="#ffffff" />

                                    {/* Arrow at end */}
                                    <path
                                        d="M290,60 L310,40 L330,60"
                                        fill="none"
                                        stroke="#0d9488"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Values Icons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <Users size={24} className="text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{t.visionMission.values.collaboration}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-3">
                                <Lightbulb size={24} className="text-teal" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{t.visionMission.values.innovation}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                                <Handshake size={24} className="text-accent" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{t.visionMission.values.empathy}</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-3">
                                <Target size={24} className="text-navy" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{t.visionMission.values.sustainability}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
