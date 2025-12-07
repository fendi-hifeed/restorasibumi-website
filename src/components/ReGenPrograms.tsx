"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ReGenPrograms = () => {
    return (
        <section id="programs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        PROGRAM DAN INISIATIF
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Yuk kenalan dengan program kami.
                    </p>
                    <div className="max-w-4xl mx-auto text-left md:text-center">
                        <p className="text-gray-700 mb-4">
                            Yayasan Langkah restorasi bumi mempunyai program bernama ReGen Series.
                            <strong className="text-primary"> Apa itu ReGen series?</strong> Gerakan Restorasi yang Menghubungkan Bumi, Manusia, dan Masa Depan.
                        </p>
                        <p className="text-gray-700 mb-2">
                            Kata di ambil dari <strong className="text-primary">RE-GEN = Regenerate and Generation</strong>
                        </p>
                        <p className="text-gray-600">
                            Program yang fokus memulihkan bumi (regenerate) sekaligus digerakkan generasi sekarang (generation) dari anak muda, masyarakat, hingga komunitas sosial.
                        </p>
                    </div>
                </div>

                {/* ReGen Earth */}
                <div id="environment-programs" className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                                Memulihkan Ekosistem
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                ReGen Earth
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                ReGen Earth bergerak dalam <strong className="text-gray-800">pemulihan lahan kritis, reboisasi, dan edukasi lingkungan.</strong> Setiap aksi dirancang untuk mengembalikan fungsi ekosistem dan mengurangi dampak perubahan iklim.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Saat ini kami menjalankan gerakan ini dengan nama "<strong className="text-primary">KitaHijaukan</strong>" Gerakan Restorasi Lahan Berbasis Circular Economy & Cadangan Karbon.
                            </p>
                            <Link
                                href="https://kitahijaukan.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Selengkapnya
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
                                Menguatkan Masyarakat
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                ReGen Humanity
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                ReGen Humanity menghadirkan <strong className="text-gray-800">bantuan kemanusiaan</strong> untuk <strong className="text-primary">korban bencana, mendukung keluarga rentan, dan membuka peluang pemberdayaan ekonomi.</strong>
                            </p>
                            <Link
                                href="#donate"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Selengkapnya
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
                                Membangun Generasi Masa Depan
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                ReGen Future
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                ReGen Future menghubungkan <strong className="text-gray-800">pemuda dengan peluang volunteer, magang sosial, hingga ruang inovasi hijau.</strong> Ini adalah panggung untuk generasi yang ingin menciptakan dunia lebih baik.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Karena <strong className="text-gray-800">masa depan tidak datang</strong>, kita yang harus <strong className="text-primary">membangunnya.</strong>
                            </p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Selengkapnya
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
