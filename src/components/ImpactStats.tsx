"use client";

import { Users, TreePine, Globe2, Handshake, Building2, Newspaper, Award, MapPin } from "lucide-react";

const ImpactStats = () => {
    const stats = [
        {
            number: "5+",
            label: "TAHUN",
            sublabel: "PENGALAMAN",
            icon: <Award size={24} />,
            variant: "primary"
        },
        {
            number: "50000+",
            label: "ORANG TERDAMPAK",
            sublabel: "DI INDONESIA",
            icon: <Users size={24} />,
            variant: "primary-wide"
        },
        {
            number: "10+",
            label: "PROGRAM",
            sublabel: "UNGGULAN",
            icon: <Globe2 size={24} />,
            variant: "primary"
        },
        {
            number: "25000+",
            label: "POHON",
            sublabel: "DITANAM",
            icon: <TreePine size={24} />,
            variant: "navy-wide"
        },
        {
            number: "8",
            label: "PROVINSI",
            sublabel: "TERJANGKAU",
            icon: <MapPin size={24} />,
            variant: "navy"
        },
        {
            number: "15",
            label: "PROYEK",
            sublabel: "AKTIF",
            icon: <Building2 size={24} />,
            variant: "navy"
        },
        {
            number: "100+",
            label: "MITRA",
            sublabel: "PARTNER",
            icon: <Handshake size={24} />,
            variant: "primary"
        },
        {
            number: "50+",
            label: "LIPUTAN",
            sublabel: "MEDIA",
            icon: <Newspaper size={24} />,
            variant: "primary"
        },
        {
            number: "200+",
            label: "RELAWAN",
            sublabel: "AKTIF",
            icon: <Users size={24} />,
            variant: "primary"
        },
    ];

    const getCardClasses = (variant: string) => {
        const baseClasses = "rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl";
        switch (variant) {
            case "primary":
                return `${baseClasses} bg-gradient-to-br from-primary to-primary-light`;
            case "primary-wide":
                return `${baseClasses} bg-gradient-to-br from-primary to-primary-light col-span-2`;
            case "navy":
                return `${baseClasses} bg-gradient-to-br from-navy to-navy-light`;
            case "navy-wide":
                return `${baseClasses} bg-gradient-to-br from-navy to-navy-light col-span-2`;
            default:
                return `${baseClasses} bg-gradient-to-br from-primary to-primary-light`;
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="section-line"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Fakta dan Angka tentang Restorasi Bumi
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* Row 1 */}
                    <div className={getCardClasses(stats[0].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[0].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[0].label}</span>
                        {stats[0].icon && <div className="mt-3 opacity-70">{stats[0].icon}</div>}
                    </div>
                    <div className={getCardClasses(stats[1].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[1].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[1].label}</span>
                        <span className="text-xs opacity-70">{stats[1].sublabel}</span>
                        {stats[1].icon && <div className="mt-3 opacity-70">{stats[1].icon}</div>}
                    </div>
                    <div className={getCardClasses(stats[2].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[2].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[2].label}</span>
                        {stats[2].icon && <div className="mt-3 opacity-70">{stats[2].icon}</div>}
                    </div>

                    {/* Row 2 */}
                    <div className={getCardClasses(stats[3].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[3].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[3].label}</span>
                        <span className="text-xs opacity-70">{stats[3].sublabel}</span>
                        {stats[3].icon && <div className="mt-3 opacity-70">{stats[3].icon}</div>}
                    </div>
                    <div className={getCardClasses(stats[4].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[4].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[4].label}</span>
                        {stats[4].icon && <div className="mt-3 opacity-70">{stats[4].icon}</div>}
                    </div>
                    <div className={getCardClasses(stats[5].variant)}>
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[5].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[5].label}</span>
                        {stats[5].icon && <div className="mt-3 opacity-70">{stats[5].icon}</div>}
                    </div>

                    {/* Row 3 */}
                    <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[6].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[6].label}</span>
                        {stats[6].icon && <div className="mt-3 opacity-70">{stats[6].icon}</div>}
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-teal to-primary rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[7].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[7].label}</span>
                        {stats[7].icon && <div className="mt-3 opacity-70">{stats[7].icon}</div>}
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="text-4xl md:text-5xl font-bold mb-2">{stats[8].number}</span>
                        <span className="text-xs font-semibold tracking-wider opacity-90">{stats[8].label}</span>
                        {stats[8].icon && <div className="mt-3 opacity-70">{stats[8].icon}</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
