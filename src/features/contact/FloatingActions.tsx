"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export function FloatingActions() {
    const t = useTranslations("Floating");

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show after scrolling down 300px
            const isScrolledDown = scrollY > 300;

            // Hide if the user reached the very bottom (Contact / Footer section)
            const isAtBottom = scrollY + windowHeight >= documentHeight - 150;

            setIsVisible(isScrolledDown && !isAtBottom);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    {/* Directly linking to the tally form to set up a meeting */}
                    <a href="https://tally.so/r/68d2Gk" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            layoutId="fab-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all outline-none border border-white/10"
                        >
                            <MessageSquare className="w-5 h-5" />
                            <span className="font-bold tracking-wide">{t("meeting")}</span>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/0 group-hover:ring-blue-500/50 transition-all duration-300" />
                        </motion.button>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
