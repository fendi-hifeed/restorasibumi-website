"use client";

import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DonationCard = () => {
    const { t } = useLanguage();

    const donations = [
        {
            name: t.donation.cards.kitahijaukan.name,
            href: "https://kitahijaukan.com",
            description: t.donation.cards.kitahijaukan.desc,
        },
        {
            name: t.donation.cards.youth.name,
            href: "#youth-climate-grant",
            description: t.donation.cards.youth.desc,
        },
        {
            name: t.donation.cards.disaster.name,
            href: "#bantuan-bencana",
            description: t.donation.cards.disaster.desc,
        },
        {
            name: t.donation.cards.dhuafa.name,
            href: "#dhuafa",
            description: t.donation.cards.dhuafa.desc,
        },
        {
            name: t.donation.cards.orphans.name,
            href: "#anak-yatim",
            description: t.donation.cards.orphans.desc,
        },
        {
            name: t.donation.cards.general.name,
            href: "#donasi-umum",
            description: t.donation.cards.general.desc,
        },
    ];

    return (
        <section id="donate" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary italic">
                        {t.donation.title}
                    </h2>
                    <p className="text-gray-600 mt-4">
                        {t.donation.subtitle}
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
                        {t.donation.footer}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonationCard;
