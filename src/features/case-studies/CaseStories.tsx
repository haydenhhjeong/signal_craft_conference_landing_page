"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function CaseStories() {
    const t = useTranslations("Cases");

    const cases = [
        {
            id: 1,
            key: "case1",
            image: "bg-blue-900/20",
        },
        {
            id: 2,
            key: "case2",
            image: "bg-purple-900/20",
        },
        {
            id: 3,
            key: "case3",
            image: "bg-emerald-900/20",
        },
    ];

    return (
        <section id="cases" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground break-keep font-display mb-4 text-center">
                        {t("title")}
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 text-center">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
                    {cases.map((story, i) => (
                        <Link key={story.id} href={`/cases/${story.id}`} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer min-h-[auto] md:min-h-[400px] flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full h-52 md:h-64 rounded-2xl mb-4 md:mb-6 overflow-hidden ${story.image} relative`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs text-white font-medium border border-white/20">
                                            {t(`stories.${story.key}.industry`)}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors leading-tight">
                                        {t(`stories.${story.key}.client`)}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-400 mb-4 flex-1 break-keep">
                                        {t(`stories.${story.key}.title`)}
                                    </p>
                                    <div className="pt-4 border-t border-border mt-auto">
                                        <p className="text-base md:text-lg text-gray-400 font-semibold text-blue-600">
                                            {t("result")}: {t(`stories.${story.key}.result`)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* <div className="mt-8 text-center md:hidden">
                    <Link href="/cases" className="inline-flex items-center text-sm font-semibold hover:text-blue-500">
                        {t("viewAll")} <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div> */}
            </div>
        </section>
    );
}
