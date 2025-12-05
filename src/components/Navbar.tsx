"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navLinks = [
        {
            name: "Tentang",
            href: "#about",
            dropdown: [
                { name: "Cara Kerja Kami", href: "#about" },
                { name: "Tim Kami", href: "#team" },
                { name: "Mitra", href: "#partners" },
            ]
        },
        { name: "Program", href: "#programs" },
        { name: "Proyek", href: "#projects" },
        { name: "Dampak", href: "#impact" },
        { name: "Berita", href: "#news" },
        { name: "Bergabung", href: "#contact" },
    ];

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-12 w-12">
                                <Image
                                    src="/logo.png"
                                    alt="Restorasi Bumi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <span className="font-bold text-xl text-primary block leading-tight">restorasi</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">bumi</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium py-2"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={16} className="opacity-50" />}
                                </Link>
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[200px] border border-gray-100 animate-slide-up">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Language & CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                            <button className="w-8 h-6 rounded overflow-hidden opacity-50 hover:opacity-100 transition-opacity">
                                <span className="text-xs font-medium">EN</span>
                            </button>
                            <button className="w-8 h-6 rounded overflow-hidden border-2 border-primary">
                                <span className="text-xs font-medium text-primary">ID</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#donate"
                            className="block w-full text-center mt-4 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Donasi Sekarang
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
