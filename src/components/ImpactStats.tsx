"use client";

import { Users, TreePine, Handshake, Heart } from "lucide-react";

const ImpactStats = () => {
    const stats = [
        {
            number: "25.000+",
            label: "POHON DITANAM",
            sublabel: "Memulihkan paru-paru bumi",
            icon: <TreePine size={32} />,
            variant: "primary"
        },
        {
            number: "50.000+",
            label: "PENERIMA MANFAAT",
            sublabel: "Masyarakat terbantu",
            icon: <Heart size={32} />,
            variant: "teal"
        },
        {
            number: "200+",
            label: "RELAWAN",
            sublabel: "Bergerak bersama kami",
            icon: <Users size={32} />,
            variant: "navy"
        },
        {
            number: "100+",
            label: "MITRA KOLABORASI",
            sublabel: "Sinergi untuk dampak luas",
            icon: <Handshake size={32} />,
            variant: "accent"
        }
    ];

    const getCardClasses = (variant: string) => {
        const baseClasses = "rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden";

        // Gradient backgrounds based on variant
        let bgClass = "";
        switch (variant) {
            case "primary":
                bgClass = "bg-gradient-to-br from-primary to-primary-light";
                break;
            case "teal":
                bgClass = "bg-gradient-to-br from-teal to-teal-light";
                break;
            case "navy":
                bgClass = "bg-gradient-to-br from-navy to-navy-light";
                break;
            case "accent":
                bgClass = "bg-gradient-to-br from-accent to-orange-400";
                break;
            default:
                bgClass = "bg-gradient-to-br from-primary to-primary-light";
        }

        return `${baseClasses} ${bgClass}`;
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Dampak Nyata Restorasi Bumi
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Setiap angka mewakili cerita perubahan, harapan yang tumbuh, dan masa depan yang lebih baik.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={getCardClasses(stat.variant)}>
                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <span className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{stat.number}</span>
                                <span className="text-sm font-bold tracking-widest uppercase mb-2 opacity-90">{stat.label}</span>
                                <span className="text-sm opacity-80 font-medium">{stat.sublabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
