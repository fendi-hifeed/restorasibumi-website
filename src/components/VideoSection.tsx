"use client";

const VideoSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-navy to-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Video Embed */}
                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Restorasi Bumi Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Decorative vertical text */}
                        <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                            <span className="text-white/30 text-sm tracking-[0.3em] font-light uppercase">
                                Restorasi Bumi
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-white">
                        <div className="section-line bg-white/50 mb-6"></div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Menjaga Bumi Indonesia untuk Menjadi Warisan Lestari bagi Generasi Mendatang
                        </h2>
                        <p className="text-white/80 leading-relaxed text-lg mb-6">
                            Kami mempertemukan para pemangku kepentingan strategis, mulai dari masyarakat lokal, pemerintah daerah, hingga sektor swasta, untuk mendorong agenda restorasi ekosistem yang berkelanjutan.
                        </p>
                        <p className="text-white/80 leading-relaxed mb-8">
                            Menjelang 2045, Indonesia menghadapi tantangan besar dalam menjaga keseimbangan alam. Deforestasi dan degradasi lingkungan terus mengancam. Waktu terus berjalan, dan kita membutuhkan aksi nyata untuk mempercepat pemulihan bumi.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                                #RestorasiBumi
                            </span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                                #HijaukanIndonesia
                            </span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                                #AksiNyata
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
