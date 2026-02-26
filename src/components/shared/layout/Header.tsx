"use client";


import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-white/10 backdrop-blur-md border-white/20 shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/sc_logo_only.png"
                        alt="SignalCraft Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>



                {/* Utilities */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Language Toggle */}
                    <div className="flex items-center gap-1 md:gap-2">
                        <Link
                            href={pathname}
                            locale="en"
                            className="text-xs md:text-sm font-bold p-2 text-foreground/80 hover:text-blue-500 transition-colors"
                        >
                            EN
                        </Link>
                        <span className="text-foreground/30 text-xs md:text-sm">|</span>
                        <Link
                            href={pathname}
                            locale="ko"
                            className="text-xs md:text-sm font-bold p-2 text-foreground/80 hover:text-blue-500 transition-colors"
                        >
                            KO
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
