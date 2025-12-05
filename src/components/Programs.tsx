import { TreePine, Sprout, Recycle, Droplets } from "lucide-react";

const Programs = () => {
    const programs = [
        {
            title: "Penanaman Pohon",
            description: "Program reboisasi hutan gundul dan penghijauan lahan kritis untuk mengembalikan paru-paru dunia.",
            icon: <TreePine size={40} className="text-white" />,
            color: "bg-emerald-500",
        },
        {
            title: "Edukasi Lingkungan",
            description: "Memberikan pemahaman kepada generasi muda tentang pentingnya menjaga kelestarian alam sejak dini.",
            icon: <Sprout size={40} className="text-white" />,
            color: "bg-lime-500",
        },
        {
            title: "Manajemen Sampah",
            description: "Pelatihan daur ulang dan pengelolaan sampah terpadu untuk mengurangi pencemaran lingkungan.",
            icon: <Recycle size={40} className="text-white" />,
            color: "bg-orange-500",
        },
        {
            title: "Konservasi Air",
            description: "Perlindungan sumber mata air dan edukasi penggunaan air bijak untuk keberlangsungan hidup.",
            icon: <Droplets size={40} className="text-white" />,
            color: "bg-blue-500",
        },
    ];

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Program Kami</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Aksi Nyata Untuk Bumi</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Berbagai inisiatif yang kami lakukan secara berkelanjutan untuk dampak yang nyata.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className={`${program.color} p-6 flex justify-center items-center h-32 group-hover:scale-105 transition-transform duration-500`}>
                                {program.icon}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {program.description}
                                </p>
                                <a href="#" className="inline-block mt-4 text-primary font-medium hover:text-primary/80 text-sm">
                                    Selengkapnya &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
