import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-[#0064dd] bg-repeat text-white pb-20"
        >
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
                <div className="flex flex-col items-start gap-6">
                    <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                        Who We Are
                    </h1>
                    <p className="text-white/70 font-xl">
                        With a foundation in the banking industry and Wall Street, our founders saw firsthand how small businesses struggled to access funding through traditional financial channels. This inspired them to establish Shore Funding Solutions in 2014, with a small but dedicated team based in Melville, NY. From these modest beginnings, we’ve grown to a team of 80 professionals. Along the way, we’ve facilitated over $1 billion in funding, and our dedication to empowering businesses with financial solutions remains at the core of our continued success.
                    </p>
                    <button
                        type="button"
                        className="rounded-full bg-white px-6 py-3 text-2xl font-bold text-[#0064dd]"
                    >
                        Get Started
                    </button>
                </div>

                <div className="relative mx-auto flex w-full justify-center md:justify-end">
                    <Image
                        src="/about.webp"
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