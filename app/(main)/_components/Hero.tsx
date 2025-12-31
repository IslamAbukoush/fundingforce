import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-[#000082] bg-repeat text-white pb-40"
            style={{ backgroundImage: "url(/bg.svg)" }}
        >
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
                <div className="flex flex-col items-start gap-6">
                    <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                        Business funding made easy.
                    </h1>

                    <p className="max-w-lg text-2xl font-medium text-white/90">
                        Apply in minutes. Get funds in 24 hours.*
                    </p>
                    <p className="text-white/70">
                        How you use the money is up to you. Do you have expansion plans? Or perhaps you could use some working capital to help with your cash flow. We help businesses:
                    </p>
                    <button
                        type="button"
                        className="rounded-full bg-white px-6 py-3 text-lg font-bold text-[#000082]"
                    >
                        Get Started
                    </button>
                </div>

                <div className="relative mx-auto flex w-full justify-center md:justify-end">
                    <Image
                        src="/hero.webp"
                        alt=""
                        width={720}
                        height={720}
                        priority
                        className="h-auto w-full max-w-xl"
                    />
                </div>
            </div>
        </section>
    );
}