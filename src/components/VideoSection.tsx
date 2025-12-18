"use client";

import { useLanguage } from "../context/LanguageContext";

const VideoSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gradient-to-br from-navy to-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Video Embed */}
                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src="https://drive.google.com/file/d/16RuZu3UQKKO027FwjbTddciUTz1Fw72B/preview"
                                allow="autoplay"
                            ></iframe>
                        </div>
                        {/* Decorative vertical text */}
                        <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                            <span className="text-white/30 text-sm tracking-[0.3em] font-light uppercase">
                                {t.videoSection.verticalText}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-white">
                        <div className="section-line bg-white/50 mb-6"></div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            {t.videoSection.title}
                        </h2>
                        <p className="text-white/80 leading-relaxed text-lg mb-6">
                            {t.videoSection.desc1}
                        </p>
                        <p className="text-white/80 leading-relaxed mb-8">
                            {t.videoSection.desc2}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {t.videoSection.hashtags.map((tag, index) => (
                                <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
