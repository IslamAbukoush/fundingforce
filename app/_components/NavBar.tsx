"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type NavItemProps = {
    label: string;
    href?: string;
    showChevron?: boolean;
};

function NavItem({ label, href = "#", showChevron = false }: NavItemProps) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1 text-[16px] text-[#333333]"
        >
            <span>{label}</span>
            {showChevron ? (
                <ChevronDown className="h-5 w-5 font-light text-[#333333]" aria-hidden="true" />
            ) : null}
        </Link>
    );
}

const servicesLinks = [
    { label: "Business Term Loan", href: "#" },
    { label: "Business Line of Credit", href: "#" },
    { label: "Equipment Financing", href: "#" },
] as const;

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mobileOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mobileOpen]);

    useEffect(() => {
        if (!servicesOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setServicesOpen(false);
        };
        const onPointerDown = (e: PointerEvent) => {
            const target = e.target as Node | null;
            if (!target) return;
            if (servicesRef.current && !servicesRef.current.contains(target)) {
                setServicesOpen(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("pointerdown", onPointerDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("pointerdown", onPointerDown);
        };
    }, [servicesOpen]);

    return (
        <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/" className="inline-flex items-start gap-0.5">
                        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
                    </Link>

                    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
                        <div className="relative" ref={servicesRef}>
                            <button
                                type="button"
                                className="inline-flex items-center gap-1 text-[16px] text-[#333333]"
                                aria-haspopup="menu"
                                aria-expanded={servicesOpen}
                                aria-controls="services-menu"
                                onClick={() => setServicesOpen((v) => !v)}
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`h-5 w-5 font-light text-[#333333] transition-transform duration-200 ${
                                        servicesOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {servicesOpen ? (
                                <div
                                    id="services-menu"
                                    role="menu"
                                    className="absolute left-0 top-full mt-3 w-64 rounded-xl border border-zinc-200 bg-white py-2 shadow-xl"
                                >
                                    {servicesLinks.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            role="menuitem"
                                            className="block px-5 py-3 text-[15px] font-medium text-zinc-900 hover:bg-zinc-50"
                                            onClick={() => setServicesOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        <NavItem label="About Us" href="/about" />
                        <NavItem label="FAQ's" href="#" />
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block group">
                        <Link
                            href="tel:+15167105272"
                            className="inline-flex items-center gap-1 text-[16px] font-medium text-[#333333]"
                        >
                            <span>(516) 710-5272</span>
                            <ChevronDown
                                className="h-5 w-5 font-light text-[#333333] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                aria-hidden="true"
                            />
                        </Link>

                        <div className="pointer-events-none absolute left-0 top-full mt-2 w-max translate-y-1 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] leading-5 text-zinc-700 opacity-0 shadow-sm transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                            <div className="font-semibold text-[#333333]">Monday - Friday</div>
                            <div>9 a.m. - 7:30 p.m. EST</div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full p-2 text-[#333333] md:hidden"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>

                    <Link
                        href="/apply"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-[15px] font-bold text-white hover:bg-blue-700"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>

            {mobileOpen ? (
                <div className="border-t border-zinc-200 bg-white md:hidden">
                    <nav aria-label="Mobile" className="mx-auto max-w-7xl px-6 py-4">
                        <button
                            type="button"
                            className="flex w-full items-center justify-between py-3 text-left text-[16px] font-semibold text-[#333333]"
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            aria-expanded={mobileServicesOpen}
                        >
                            <span>Services</span>
                            <ChevronDown
                                className={`h-5 w-5 text-[#333333] transition-transform duration-200 ${
                                    mobileServicesOpen ? "rotate-180" : "rotate-0"
                                }`}
                                aria-hidden="true"
                            />
                        </button>
                        {mobileServicesOpen ? (
                            <div className="pb-2">
                                {servicesLinks.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block py-2 pl-3 text-[15px] text-zinc-900"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        ) : null}

                        <Link
                            href="/about"
                            className="block py-3 text-[16px] font-semibold text-[#333333]"
                            onClick={() => setMobileOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            className="block py-3 text-[16px] font-semibold text-[#333333]"
                            onClick={() => setMobileOpen(false)}
                        >
                            FAQ&apos;s
                        </Link>
                        <Link
                            href="tel:+15167105272"
                            className="block py-3 text-[16px] font-semibold text-[#333333]"
                        >
                            (516) 710-5272
                        </Link>
                        <div className="pb-1 pl-0 text-sm text-zinc-500">
                            Monday - Friday, 9 a.m. - 7:30 p.m. EST
                        </div>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}