import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const columns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
	{
		title: "Small Business Loans",
		links: [
			{ label: "Business Line of Credit", href: "#" },
			{ label: "Term Loan", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Free Business Credit Score", href: "#" },
			{ label: "Small Business Loans Explained", href: "#" },
			{ label: "Small Business Trend Report", href: "#" },
			{ label: "Business Blog", href: "#" },
			{ label: "FAQs", href: "#" },
			{ label: "Contact Us", href: "#" },
			{ label: "Restricted Industries", href: "#" },
			{ label: "Sitemap", href: "#" },
		],
	},
	{
		title: "About Us",
		links: [
			{ label: "Who We Are", href: "#" },
			{ label: "Partner With Us", href: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Security Policy", href: "#" },
			{ label: "Terms of Use", href: "#" },
			{ label: "Do Not Sell or Share My Personal Information", href: "#" },
			{ label: "California Collection Notice", href: "#" },
		],
	},
];

const social = [
	{ label: "Facebook", href: "#", Icon: Facebook },
	{ label: "X", href: "#", Icon: X },
	{ label: "LinkedIn", href: "#", Icon: Linkedin },
	{ label: "Instagram", href: "#", Icon: Instagram },
] as const;

const badges = [
	{ src: "/business/forbes.png", alt: "Forbes" },
	{ src: "/business/bloomberg.png", alt: "Bloomberg" },
	{ src: "/business/barrons.png", alt: "Barron's" },
] as const;

export default function Footer() {
	return (
		<footer
			className="relative overflow-hidden bg-[#010135] text-white"
		>
			<div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
				<div className="flex items-start justify-between gap-8">
					<div className="grid w-full grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
						{columns.map((col) => (
							<div key={col.title}>
								<h3 className="text-lg font-semibold">{col.title}</h3>
								<ul className="mt-6 space-y-4">
									{col.links.map((l) => (
										<li key={l.label}>
											<Link
												href={l.href}
												className="text-base text-white/90 hover:text-white"
											>
												{l.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="hidden shrink-0 md:block">
						<Link
							href="#top"
							className="inline-flex items-center justify-center rounded-full border border-white/80 px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
						>
							Back to Top
						</Link>
					</div>
				</div>

				<div className="mt-14 border-t border-white/25 pt-8">
					<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
						<div className="flex items-center gap-10">
							<Image src="/logo.png" alt="Logo" width={120} height={40} className="grayscale-100 invert-100 opacity-70" />
							<div className="flex items-center gap-5">
								{social.map(({ label, href, Icon }) => (
									<Link
										key={label}
										href={href}
										aria-label={label}
										className="text-white/90 hover:text-white"
									>
										<Icon className="h-5 w-5" aria-hidden="true" />
									</Link>
								))}
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-6">
							{badges.map((b) => (
								<Image
									key={b.src}
									src={b.src}
									alt={b.alt}
									width={140}
									height={48}
									className="h-10 w-auto object-contain grayscale-100 invert-100 opacity-70"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
