import { Target, Heart, Globe } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Yayasan Restorasi Bumi hadir sebagai wujud kepedulian terhadap kondisi lingkungan yang semakin kritis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Mission */}
                    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Mengembalikan fungsi ekosistem yang rusak melalui aksi nyata restorasi lahan, penanaman pohon, dan edukasi masyarakat.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Terwujudnya bumi yang hijau, lestari, dan seimbang dimana manusia hidup harmonis berdampingan dengan alam.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Nilai Kami</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Integritas, Kolaborasi, dan Keberlanjutan menjadi landasan setiap langkah yang kami ambil untuk bumi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
