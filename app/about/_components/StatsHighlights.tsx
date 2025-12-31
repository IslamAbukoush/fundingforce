import { DollarSign, CalendarDays, Users, UsersRound } from "lucide-react";

const cards = [
	{
		Icon: CalendarDays,
		title: "25+",
		subtitle: "Years in Business",
	},
	{
		Icon: Users,
		title: "5k+",
		subtitle: "Satisfied Customers",
	},
	{
		Icon: DollarSign,
		title: "$10M",
		subtitle: "Monthly Funded",
	},
	{
		Icon: UsersRound,
		title: "7+",
		subtitle: "Team Members",
	},
] as const;

export default function StatsHighlights() {
	return (
		<div className="absolute left-0 right-0 -translate-y-1/2">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-6 md:grid-cols-4 md:gap-8">
					{cards.map(({ Icon, title, subtitle }) => (
						<div
							key={title}
							className="rounded-2xl bg-white px-8 py-10 text-center shadow-xl"
						>
							<Icon
								className="mx-auto h-12 w-12 text-[#0064dd]"
								strokeWidth={2}
								aria-hidden="true"
							/>
							<div className="mt-6 text-4xl font-extrabold tracking-tight text-[#000082] md:text-5xl">
								{title}
							</div>
							<div className="mt-2 text-base font-medium text-zinc-500">{subtitle}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
