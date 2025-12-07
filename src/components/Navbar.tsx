"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navLinks = [
        {
            name: "About Us",
            href: "#about",
            dropdown: [
                { name: "Visi & Misi", href: "#vision-mission" },
                { name: "How We Work", href: "#vision-mission" },
                { name: "Kontak Kami", href: "#contact" },
                { name: "FAQ", href: "#faq" },
            ]
        },
        {
            name: "Program",
            href: "#programs",
            dropdown: [
                { name: "ReGen Earth", href: "#environment-programs" },
                { name: "ReGen Humanity", href: "#humanity-programs" },
                { name: "ReGen Future", href: "#faith-programs" },
            ]
        },
        { name: "Impact", href: "#impact" },
        { name: "Donasi", href: "#donate" },
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
                                className="relative group h-full flex items-center"
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium py-2"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={16} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                                </Link>

                                {link.dropdown && (
                                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                                        <div className="bg-white shadow-xl rounded-lg py-2 min-w-[200px] border border-gray-100 animate-slide-up">
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
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button & Language Toggle */}
                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageToggle />
                        <Link
                            href="#donate"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Donasi Sekarang
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <LanguageToggle />
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
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <div>
                                        <button
                                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {activeDropdown === link.name && (
                                            <div className="pl-4 mt-1 space-y-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="#donate"
                            className="block w-full text-center mt-4 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
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
