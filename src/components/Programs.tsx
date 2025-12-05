import { TreePine, Sprout, Recycle, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";

const Programs = () => {
    const programs = [
        {
            title: "Penanaman Pohon",
            description: "Program reboisasi hutan gundul dan penghijauan lahan kritis untuk mengembalikan paru-paru dunia.",
            icon: <TreePine size={48} className="text-white" />,
            gradient: "from-emerald-500 to-emerald-700",
        },
        {
            title: "Edukasi Lingkungan",
            description: "Memberikan pemahaman kepada generasi muda tentang pentingnya menjaga kelestarian alam sejak dini.",
            icon: <Sprout size={48} className="text-white" />,
            gradient: "from-lime-500 to-lime-700",
        },
        {
            title: "Manajemen Sampah",
            description: "Pelatihan daur ulang dan pengelolaan sampah terpadu untuk mengurangi pencemaran lingkungan.",
            icon: <Recycle size={48} className="text-white" />,
            gradient: "from-amber-500 to-amber-700",
        },
        {
            title: "Konservasi Air",
            description: "Perlindungan sumber mata air dan edukasi penggunaan air bijak untuk keberlangsungan hidup.",
            icon: <Droplets size={48} className="text-white" />,
            gradient: "from-blue-500 to-blue-700",
        },
    ];

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="section-line mx-auto"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Program Unggulan Kami</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Berbagai inisiatif yang kami lakukan secara berkelanjutan untuk dampak yang nyata bagi lingkungan dan masyarakat Indonesia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className={`bg-gradient-to-br ${program.gradient} p-8 flex justify-center items-center h-40 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}>
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                                {program.icon}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {program.description}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                                >
                                    Selengkapnya
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/30"
                    >
                        Lihat Semua Program
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Programs;
