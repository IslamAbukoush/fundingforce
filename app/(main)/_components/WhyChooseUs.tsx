import Image from "next/image";

type WhyItem = {
	src: string;
	title: string;
	description: string;
};

const items: WhyItem[] = [
	{
		src: "/why/why1.svg",
		title: "Easy process",
		description:
			"You can work with Funding Force directly from application to funding, without going through a third party.",
	},
	{
		src: "/why/why2.svg",
		title: "Fast funding",
		description:
			"Lines of credit can fund instantly.* Term loans can fund the same day.*",
	},
	{
		src: "/why/why3.svg",
		title: "No hard credit pulls",
		description:
			"Check your eligibility without affecting your credit score.",
	},
];


export default function WhyChooseUs() {
	return (
		<section className="pt-56 px-6 pb-16 text-white md:pb-20 bg-[#0064dd]">
			<div className="mx-auto max-w-7xl">
				<h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
					Why partner with Funding Force?
				</h2>

				<div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
					{items.map((item) => (
						<div key={item.title} className="text-center">
							<div className="mx-auto w-full max-w-xs">
								<Image
									src={item.src}
									alt=""
									width={360}
									height={360}
									className="h-auto w-full"
									priority={false}
								/>
							</div>

							<h3 className="mt-8 text-3xl font-extrabold tracking-tight">
								{item.title}
							</h3>
							<p className="mt-4 text-lg leading-relaxed text-white/90">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
