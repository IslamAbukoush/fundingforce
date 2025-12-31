import Image from "next/image";

const steps = [
	{
		number: 1,
		title: "Apply in minutes.",
		description:
			"Minimum documentation is required and applying won’t affect your credit score.",
	},
	{
		number: 2,
		title: "Review Offers.",
		description:
			"A dedicated representative will help you select the best offer for you.",
	},
	{
		number: 3,
		title: "Get Funds.",
		description:
			"Once approved, lines of credit can be funded instantly. Term loans funds in as little as 24 hours.*",
	},
] as const;

export default function FundingSteps() {
	return (
		<section className="bg-white px-6 py-12 md:py-16">
			<div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-4xl">
						Funding that moves at your speed.
					</h2>

					<div className="mt-8 space-y-8">
						{steps.map((step) => (
							<div key={step.number} className="flex gap-5">
								<div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CFF7EC]">
									<span className="text-xl font-extrabold text-blue-950">
										{step.number}
									</span>
								</div>
								<div>
									<h3 className="text-xl font-extrabold text-zinc-800">
										{step.title}
									</h3>
									<p className="mt-2 text-base leading-relaxed text-zinc-600">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>

					<a
						href="/apply"
						className="mt-10 inline-flex items-center justify-center rounded-full bg-[#0064dd] px-10 py-3 text-xl font-extrabold text-white hover:bg-blue-700"
					>
						Apply Now
					</a>
				</div>

				<div className="flex justify-center md:justify-end">
					<Image
						src="/mobile.webp"
						alt=""
						width={520}
						height={520}
						sizes="(min-width: 768px) 420px, 80vw"
						className="h-auto w-full max-w-sm md:max-w-md"
						priority={false}
					/>
				</div>
			</div>
		</section>
	);
}