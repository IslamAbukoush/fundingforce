import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

function getLogoPaths(): string[] {
    const publicDir = path.join(process.cwd(), "public");
    const companiesDir = path.join(publicDir, "companies");
    const businessDir = path.join(publicDir, "business");

    const logosDir = fs.existsSync(companiesDir) ? companiesDir : businessDir;
    if (!fs.existsSync(logosDir)) return [];

    const allowedExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
    return fs
        .readdirSync(logosDir)
        .filter((fileName) => allowedExt.has(path.extname(fileName).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((fileName) => `/${path.basename(logosDir)}/${fileName}`);
}

export default function RecognitionCarousel() {
    const logos = getLogoPaths();
    const loop = logos.length > 0 ? [...logos, ...logos] : [];

    return (
        <div className="absolute left-0 right-0 -translate-y-1/2">
            <div className="mx-auto max-w-6xl rounded-2xl bg-white px-6 py-10 shadow-xl md:px-12">
                <div className="grid gap-10 md:grid-cols-4 md:gap-6">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
                            25+
                        </div>
                        <div className="mt-3 text-lg font-medium text-zinc-500">
                            Years in Business
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
                            5k+
                        </div>
                        <div className="mt-3 text-lg font-medium text-zinc-500">
                            Satisfied Customers
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
                            $10M
                        </div>
                        <div className="mt-3 text-lg font-medium text-zinc-500">
                            Monthly Funded
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
                            7+
                        </div>
                        <div className="mt-3 text-lg font-medium text-zinc-500">
                            Team Members
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-zinc-200" />

                <div
                    className="relative mt-10 overflow-hidden"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    {logos.length === 0 ? (
                        <p className="text-center text-sm text-zinc-500">
                            No company logos found. Add files to `public/companies`.
                        </p>
                    ) : (
                        <div className="flex w-max items-center gap-16 animate-[marquee_28s_linear_infinite]">
                            {loop.map((src, idx) => (
                                <div key={`${src}-${idx}`} className="flex items-center">
                                    <Image
                                        src={src}
                                        alt=""
                                        width={220}
                                        height={200}
                                        className="h-14 w-auto object-contain"
                                        priority={idx < logos.length}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
