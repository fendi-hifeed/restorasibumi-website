import { Leaf, Globe, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="section-line"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Theory of Change Kami:
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-900 mb-6 leading-tight">
                            Masa Depan Dibentuk oleh Aksi Nyata, Kolaborasi, dan Komitmen yang Mendukung Keberlanjutan
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Untuk mewujudkan Indonesia yang hijau dan berkelanjutan, tiga pilar utama menjadi fondasi. Restorasi Bumi menghadirkan empat program inti: Penanaman Pohon, Edukasi Lingkungan, Konservasi Air, dan Pengelolaan Sampah Berkelanjutan.
                        </p>
                        <Link
                            href="#programs"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all group"
                        >
                            SELENGKAPNYA
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right - Circular Diagram */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Outer Ring */}
                            <div className="aspect-square rounded-full bg-gradient-to-br from-primary via-teal to-accent p-2">
                                <div className="w-full h-full rounded-full bg-white p-4">
                                    {/* Middle Ring */}
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-6">
                                        {/* Inner Content */}
                                        <div className="text-center">
                                            <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                                                <Leaf size={40} className="text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-primary">RESTORASI</h3>
                                            <p className="text-sm text-gray-600">EKOSISTEM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Labels */}
                            <div className="absolute -top-2 right-0 bg-white shadow-lg rounded-lg px-4 py-2 transform rotate-12">
                                <span className="text-xs font-bold text-accent uppercase tracking-wide">Penanaman</span>
                            </div>
                            <div className="absolute top-1/4 -right-4 bg-primary text-white shadow-lg rounded-lg px-4 py-2">
                                <span className="text-xs font-bold uppercase tracking-wide">Edukasi</span>
                            </div>
                            <div className="absolute bottom-1/4 -right-2 bg-navy text-white shadow-lg rounded-lg px-4 py-2 transform -rotate-12">
                                <span className="text-xs font-bold uppercase tracking-wide">Konservasi</span>
                            </div>
                            <div className="absolute -bottom-2 left-1/4 bg-teal text-white shadow-lg rounded-lg px-4 py-2">
                                <span className="text-xs font-bold uppercase tracking-wide">Daur Ulang</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Values */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Leaf size={32} className="text-primary" />
                        </div>
                        <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">A</span>
                        <h3 className="font-bold text-gray-900 mb-2">FOCUS THEMES</h3>
                        <p className="text-sm text-gray-600">Fokus pada restorasi ekosistem dan keberlanjutan</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe size={32} className="text-teal" />
                        </div>
                        <span className="inline-block bg-teal text-white text-xs font-bold px-3 py-1 rounded-full mb-3">B</span>
                        <h3 className="font-bold text-gray-900 mb-2">EXPECTED OUTPUTS</h3>
                        <p className="text-sm text-gray-600">Dampak nyata untuk lingkungan dan masyarakat</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart size={32} className="text-navy" />
                        </div>
                        <span className="inline-block bg-navy text-white text-xs font-bold px-3 py-1 rounded-full mb-3">C</span>
                        <h3 className="font-bold text-gray-900 mb-2">PROGRAMS</h3>
                        <p className="text-sm text-gray-600">Program-program unggulan terintegrasi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
