import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative h-10 w-10 bg-white rounded-full p-1">
                                <Image
                                    src="/logo.png"
                                    alt="Restorasi Bumi Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="font-bold text-xl text-white">Restorasi Bumi</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Yayasan yang berdedikasi untuk memulihkan ekosistem bumi dan membangun masa depan yang berkelanjutan bagi generasi mendatang.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#programs" className="hover:text-primary transition-colors">Program</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Kontak</Link></li>
                            <li><Link href="#donate" className="hover:text-primary transition-colors">Donasi</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Program Kami</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Penanaman Pohon</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Edukasi Lingkungan</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Daur Ulang Sampah</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Konservasi Air</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span>Jl. Contoh No. 123, Jakarta Selatan, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span>info@restorasibumi.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Yayasan Restorasi Bumi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
