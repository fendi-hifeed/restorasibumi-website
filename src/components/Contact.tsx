"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Terjadi kesalahan");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "Gagal mengirim pesan. Silakan coba lagi.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Hubungi Kami</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Mari Berkolaborasi</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Punya ide untuk kolaborasi atau ingin tahu lebih banyak tentang program kami? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kantor Pusat</h3>
                            <p className="text-gray-600 mb-2">Gedung Hijau Lestari, Lt. 3</p>
                            <p className="text-gray-600 mb-2">Jl. Jendral Sudirman No. Kav 10</p>
                            <p className="text-gray-600 mb-6">Jakarta Pusat, 10220</p>

                            <div className="space-y-2">
                                <p className="text-gray-600"><span className="font-semibold text-gray-900">Email:</span> hello@restorasibumi.org</p>
                                <p className="text-gray-600"><span className="font-semibold text-gray-900">Telepon:</span> +62 21 5555 1234</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                        {status === "success" && (
                            <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle size={32} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
                                <p className="text-gray-600 mb-6">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Kirim pesan lain
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Nama Anda"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="email@contoh.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Judul Pesan"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Tulis pesan Anda di sini..."
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2 text-sm">
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Kirim Pesan
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
