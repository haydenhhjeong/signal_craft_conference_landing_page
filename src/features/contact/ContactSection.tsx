"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-[#050505]">
            {/* Ultra-Premium Background VFX */}
            <div className="absolute inset-0 z-0">
                {/* Global Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1000px] bg-blue-600/10 rounded-full blur-[180px] opacity-50" />

                {/* Dynamic Aurora-like meshes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-full h-full bg-blue-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -5, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-purple-500/10 rounded-full blur-[120px]"
                />

                {/* Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Center Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                    >
                        {/* Dramatic Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-bold tracking-widest uppercase mb-12">
                            <Sparkles className="w-4 h-4" /> Ready to Scale?
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white break-keep font-display mb-8">
                            {t.rich("title", {
                                span: (chunks) => <span className="text-blue-500">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed break-keep font-medium">
                            {t("description")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
                            <a href="https://tally.so/r/68d2Gk" target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className="h-14 px-10 rounded-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xl shadow-blue-500/20 active:scale-95 group"
                                >
                                    <MessageSquare className="mr-2 w-5 h-5" /> {t("sales")}
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
