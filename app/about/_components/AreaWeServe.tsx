import Image from "next/image";

export default function AreaWeServe() {
	return (
		<section className="bg-zinc-100 px-6 pb-20">
			<div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
				<div>
					<h2 className="text-4xl font-extrabold tracking-tight text-[#000082] md:text-5xl">
						Area we serve:
					</h2>
					<p className="mt-6 text-lg leading-relaxed text-zinc-700">
						As a national ISO with a vast network of lender relationships, we proudly serve
						clients throughout the United States and Canada. Our services cater to businesses
						across all industries and locations, ensuring that we can assist a diverse range
						of companies in achieving their financial goals.
					</p>
				</div>

				<div className="flex justify-center md:justify-end">
					<Image
						src="/map.png"
						alt="Service area map"
						width={900}
						height={650}
						className="h-auto w-full max-w-xl object-contain"
						priority={false}
					/>
				</div>
			</div>
		</section>
	);
}
