"use client";

import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative h-12 w-12 border border-white rounded-full">
                                <Image
                                    src="/logo-bulat.png"
                                    alt="Restorasi Bumi Logo"
                                    fill
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <span className="font-bold text-xl text-white">Restorasi Bumi</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            {t.footer.vision}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://web.facebook.com/kitahijaukan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="https://instagram.com/kitahijaukan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                            <li><Link href="#how-we-work" className="hover:text-primary transition-colors">{t.navbar.about}</Link></li>
                            <li><Link href="#programs" className="hover:text-primary transition-colors">{t.navbar.program}</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">{t.navbar.contact}</Link></li>
                            <li><Link href="#donate" className="hover:text-primary transition-colors">{t.navbar.donate}</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">{t.footer.ourPrograms}</h3>
                        <ul className="space-y-2">
                            <li><a href="#environment-programs" className="hover:text-primary transition-colors">{t.programs.earth.title}</a></li>
                            <li><a href="#humanity-programs" className="hover:text-primary transition-colors">{t.programs.humanity.title}</a></li>
                            <li><a href="#faith-programs" className="hover:text-primary transition-colors">{t.programs.future.title}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">{t.footer.contactUs}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span>Plaza Aminta lantai 5/505, JI TB Simatupang kav. 10, Pondok Pinang, Kebayoran Lama, Jakarta Selatan. DKI Jakarta</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span>081809786141</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span>langkahrestorasibumi@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
