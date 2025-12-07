"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DonationCard = () => {
    const donations = [
        {
            name: "KITAHIJAUKAN",
            href: "https://kitahijaukan.com",
            description: "Gerakan Restorasi Lahan",
        },
        {
            name: "YOUTH CLIMATE GRANT",
            href: "#youth-climate-grant",
            description: "Hibah untuk Aksi Iklim Pemuda",
        },
        {
            name: "BANTUAN BENCANA",
            href: "#bantuan-bencana",
            description: "Tanggap Darurat Bencana",
        },
        {
            name: "DHUAFA",
            href: "#dhuafa",
            description: "Dukungan untuk Kaum Dhuafa",
        },
        {
            name: "ANAK YATIM",
            href: "#anak-yatim",
            description: "Santunan Anak Yatim",
        },
        {
            name: "DONASI UMUM",
            href: "#donasi-umum",
            description: "Donasi untuk Berbagai Program",
        },
    ];

    return (
        <section id="donate" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary italic">
                        Donation Card
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Pilih program donasi yang ingin Anda dukung
                    </p>
                </div>

                {/* Donation Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {donations.map((donation, index) => (
                        <Link
                            key={index}
                            href={donation.href}
                            target={donation.href.startsWith("http") ? "_blank" : undefined}
                            rel={donation.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group bg-primary hover:bg-primary-dark transition-all duration-300 rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
                        >
                            <div>
                                <h3 className="text-white font-bold text-lg tracking-wide">
                                    {donation.name}
                                </h3>
                                <p className="text-white/70 text-sm mt-1">
                                    {donation.description}
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white/20 transition-all">
                                <ArrowRight className="text-white" size={20} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-10">
                    <p className="text-gray-500 text-sm">
                        Semua donasi akan dikelola secara transparan dan akuntabel
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonationCard;
