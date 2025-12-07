"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: "Apa itu Yayasan Langkah Restorasi Bumi?",
        answer: "Yayasan Langkah Restorasi Bumi adalah organisasi nirlaba yang berfokus pada pemulihan lingkungan, kemanusiaan, dan mempersiapkan masa depan untuk menciptakan masa depan yang lebih berkelanjutan dan berkeadilan."
    },
    {
        question: "Apa itu ReGen Series?",
        answer: (
            <div>
                <p className="mb-3">ReGen Series adalah rangkaian program restorasi dan pemberdayaan yang terdiri dari tiga pilar utama:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong className="text-primary">ReGen Earth</strong> → fokus pada lingkungan dan restorasi ekosistem.</li>
                    <li><strong className="text-primary">ReGen Humanity</strong> → fokus pada kemanusiaan dan masyarakat rentan.</li>
                    <li><strong className="text-primary">ReGen Future</strong> → fokus pada pendidikan, inovasi, dan aksi iklim generasi muda.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Apa tujuan utama ReGen Series?",
        answer: (
            <div>
                <p className="mb-3">Untuk menciptakan dampak berkelanjutan melalui tiga arah perubahan:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Memulihkan bumi (restorasi lahan, edukasi lingkungan).</li>
                    <li>Menguatkan manusia (bantuan sosial, tanggap bencana).</li>
                    <li>Mempersiapkan masa depan (program pemuda, inovasi hijau, riset keberlanjutan).</li>
                </ol>
            </div>
        )
    },
    {
        question: "Bagaimana cara saya ikut berkontribusi?",
        answer: (
            <div>
                <p className="mb-3">Ada tiga cara utama:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Donasi untuk mendukung program ReGen Earth, Humanity, atau Future.</li>
                    <li>Volunteer dalam kegiatan lapangan atau edukasi.</li>
                    <li>Kolaborasi melalui institusi, komunitas, atau perusahaan.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Apakah saya bisa memilih program yang ingin saya dukung?",
        answer: (
            <div>
                <p className="mb-3">Ya. Donatur dapat memilih kategori:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Lingkungan</li>
                    <li>Kemanusiaan</li>
                    <li>Pendidikan dan masa depan</li>
                    <li>Atau mendukung seluruh rangkaian melalui donasi ReGen Series Fund.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Bagaimana yayasan memastikan donasi digunakan dengan transparan?",
        answer: (
            <div>
                <p className="mb-3">Yayasan menerapkan:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Laporan bulanan & triwulan program</li>
                    <li>Dokumentasi lapangan</li>
                    <li>Audit internal & eksternal</li>
                    <li>Dashboard yang menampilkan progress restorasi dan dampak sosial</li>
                </ul>
            </div>
        )
    },
    {
        question: "Siapa yang bisa mengikuti Youth Climate Grant?",
        answer: (
            <div>
                <p className="mb-3">Anak muda usia 15–30 tahun, individu atau komunitas, yang memiliki ide atau proyek terkait:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Aksi iklim</li>
                    <li>Restorasi lingkungan</li>
                    <li>Inovasi hijau</li>
                    <li>Pemberdayaan masyarakat</li>
                </ul>
            </div>
        )
    },
    {
        question: "Di mana lokasi program yayasan dijalankan?",
        answer: (
            <div>
                <p className="mb-3">Program berjalan di berbagai wilayah Indonesia, terutama area dengan:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Lahan kritis</li>
                    <li>Risiko bencana tinggi</li>
                    <li>Komunitas rentan</li>
                    <li>Kebutuhan edukasi lingkungan</li>
                </ul>
            </div>
        )
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan umum tentang Yayasan Langkah Restorasi Bumi dan program-program kami.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "border-primary shadow-lg shadow-primary/10"
                                    : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span
                                    className={`font-semibold text-lg transition-colors ${openIndex === index ? "text-primary" : "text-gray-900"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${openIndex === index
                                            ? "bg-primary text-white rotate-180"
                                            : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Masih punya pertanyaan lain?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
