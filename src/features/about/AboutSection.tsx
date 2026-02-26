"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";

export function AboutSection() {
    const t = useTranslations("About");
    const stats = [
        { key: "factories", value: "50+", icon: Building2 },
        { key: "accuracy", value: "99.8%", icon: Award },
        { key: "data", value: "2M+", icon: Users },
    ];

    return (
        <section id="about" className="pt-2 md:pt-16 pb-4 md:pb-4 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-secondary-foreground font-semibold tracking-wider uppercase mb-2 text-sm">{t("mission")}</h2>
                            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-foreground break-keep font-display">
                                {t.rich("vision", {
                                    heartbeat: (chunks) => <span className="text-blue-600 font-display">{chunks}</span>,
                                    br: () => (
                                        <>
                                            <br className="block md:hidden" />
                                            <span className="hidden md:inline"> </span>
                                        </>
                                    )
                                })}
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-gray-400 leading-relaxed break-keep"
                        >
                            {t("description")}
                        </motion.p>

                    </div>

                    {/* Visual (Replaced with Stats) */}
                    <div className="flex-1 w-full lg:max-w-md ml-auto bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8">
                        <div className="flex flex-col gap-6 md:gap-7">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4 md:gap-5"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-3xl md:text-4xl font-bold text-foreground font-display tracking-tight leading-none mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5 block">
                                            {t(`stats.${stat.key}`)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}

                </div>

                {/* Trust Badges */}
                <div className="mt-20 pt-10 border-t border-gray-800 dark:border-white/10 overflow-hidden">
                    {/* <p className="text-base md:text-lg text-gray-400 text-center dark:text-gray-400 mb-8 uppercase tracking-wider">
                        {t("trustedBy")}
                    </p> */}

                    {/* <div className="flex overflow-hidden select-none w-full">
                        <motion.div
                            className="flex gap-16 items-center flex-nowrap pr-16 shrink-0"
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                        >
                            {LOGO_LIST.map((company, index) => (
                                <span
                                    key={`l1-${index}`}
                                    className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap"
                                >
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex gap-16 items-center flex-nowrap pr-16 shrink-0"
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                        >
                            {LOGO_LIST.map((company, index) => (
                                <span
                                    key={`l2-${index}`}
                                    className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap"
                                >
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

const LOGO_LIST = [
    "Samsung Electronics",
    "LG Energy Solution",
    "POSCO",
    "Hyundai Motor",
    "Hanwha Aerospace",
    "Doosan Enerbility",
    "KAI",
    "GS Caltex",
    "HD Hyundai",
    "KLT",
    "Jeonnam Bioindustry Foundation",
    "Odle Odle Inc.",
    "NullbyteWorks",
    "Underwater",
    "Korea Maritime & Ocean University",
];
