import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-primary/10 via-white to-accent/10 min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 transform origin-top-right" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            Bersama Pulihkan Bumi
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                            Restorasi <span className="text-primary">Bumi</span> Untuk Masa Depan
                        </h1>

                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                            Bergabunglah dalam gerakan global untuk memulihkan ekosistem, menanam harapan, dan mewariskan bumi yang lebih hijau bagi generasi mendatang.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#donate"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
                            >
                                Mulai Donasi
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-gray-300"
                            >
                                Pelajari Lebih Lanjut
                            </Link>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        {/* Placeholder for Hero Image - using a decorative abstract shape for now */}
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-3xl animate-pulse" />
                            <div className="relative h-full w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-lg">Hero Image Placeholder</span>
                                </div>
                                {/* 
                    Ideally, we would use <Image /> here with a real image.
                    For now, this placeholder fits the layout.
                 */}
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-gray-900">10k+</p>
                                        <p className="text-sm text-gray-500">Pohon Ditanam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
