"use client";

import { useState } from "react";

const LanguageToggle = () => {
    const [language, setLanguage] = useState<"ID" | "EN">("ID");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-16 h-8 bg-blue-100 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            aria-label="Toggle Language"
        >
            {/* Sliding pill */}
            <div
                className={`absolute top-1 bottom-1 w-[28px] bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${language === "ID" ? "translate-x-[28px]" : "translate-x-0"
                    }`}
            />

            {/* Flags */}
            <div className="relative flex justify-between items-center h-full px-1.5 z-10">
                <span
                    className={`text-sm leading-none transition-opacity duration-300 filter grayscale-0 ${language === "EN" ? "opacity-100" : "opacity-40 grayscale"
                        }`}
                >
                    🇺🇸
                </span>
                <span
                    className={`text-sm leading-none transition-opacity duration-300 filter grayscale-0 ${language === "ID" ? "opacity-100" : "opacity-40 grayscale"
                        }`}
                >
                    🇮🇩
                </span>
            </div>
        </button>
    );
};

export default LanguageToggle;
