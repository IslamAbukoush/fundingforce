import { Star } from "lucide-react";

function StarsRow() {
	return (
		<div className="flex items-center justify-center gap-1 text-blue-600">
			{Array.from({ length: 5 }).map((_, idx) => (
				<Star
					key={idx}
					className="h-4 w-4 fill-blue-600"
					aria-hidden="true"
				/>
			))}
		</div>
	);
}

export default function Testimonials() {
	return (
		<section
			className="relative overflow-hidden bg-[#000082] bg-repeat px-6 py-14 text-white md:py-20"
			style={{ backgroundImage: "url(/bg.svg)" }}
		>
			<div className="relative mx-auto max-w-7xl">
				<h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
					What Our Clients Say About us
				</h2>

				<div className="mt-12 grid gap-8 md:grid-cols-2">
					<div className="rounded-3xl border border-zinc-200/70 bg-white px-8 py-10 text-center text-zinc-900 shadow-xl md:px-12">
						<StarsRow />
						<p className="mt-4 text-lg leading-relaxed md:text-xl">
							&quot;I got $85,000 in 2 days — Funding Force AI helped me grow when banks said no.&quot;
						</p>
						<div className="mt-8">
							<div className="text-xl font-extrabold">Josh R.</div>
							<div className="mt-1 text-sm font-medium text-zinc-500">
								Roofing Contractor
							</div>
						</div>
					</div>

					<div className="rounded-3xl border border-zinc-200/70 bg-white px-8 py-10 text-center text-zinc-900 shadow-xl md:px-12">
						<StarsRow />
						<p className="mt-4 text-lg leading-relaxed md:text-xl">
							&quot;Super fast and easy. The support was incredible.&quot;
						</p>
						<div className="mt-8">
							<div className="text-xl font-extrabold">Karla M.</div>
							<div className="mt-1 text-sm font-medium text-zinc-500">
								Med Spa Owner
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
