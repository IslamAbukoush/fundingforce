import type { ReactNode } from "react";

export const metadata = {
	title: "Apply Now",
};

const moneyOptions = [
	"$5,000 - $10,000",
	"$10,000 - $25,000",
	"$25,000 - $50,000",
	"$50,000 - $100,000",
	"$100,000 - $250,000",
	"$250,000+",
] as const;

const timeInBusinessOptions = [
	"Less than 1 year",
	"1-2 years",
	"2-3 years",
	"3-5 years",
	"5+ years",
] as const;

const revenueOptions = [
	"$0 - $10,000",
	"$10,001 - $25,000",
	"$25,001 - $50,000",
	"$50,001 - $100,000",
	"$100,001 - $250,000",
	"$250,001+",
] as const;

const timingOptions = [
	"Immediately",
	"Within 1 week",
	"Within 2 weeks",
	"Within 1 month",
	"Just exploring",
] as const;

function FieldLabel({ children }: { children: ReactNode }) {
	return (
		<label className="mb-2 block text-sm font-semibold text-zinc-900">
			{children} <span className="text-red-500">*</span>
		</label>
	);
}

function Select({
	name,
	placeholder,
	options,
}: {
	name: string;
	placeholder: string;
	options: readonly string[];
}) {
	return (
		<select
			name={name}
			required
			defaultValue=""
			className="h-11 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-900 shadow-sm outline-none focus:border-[#0064dd] focus:ring-4 focus:ring-[#0064dd]/15"
		>
			<option value="" disabled>
				{placeholder}
			</option>
			{options.map((opt) => (
				<option key={opt} value={opt}>
					{opt}
				</option>
			))}
		</select>
	);
}

export default function ApplyPage() {
	return (
		<main
			className="bg-[#000082] bg-repeat px-6 py-8 md:py-12"
			style={{ backgroundImage: "url(/bg.svg)" }}
		>
			<div className="mx-auto max-w-4xl">
				<h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
					Fast and easy business financing.
				</h1>
				<p className="mt-3 text-center text-sm text-white/80 md:text-base">
					Instant approvals and affordable terms. Applying will have no impact on your credit
				</p>

				<div className="mt-8 rounded-2xl bg-white/10 p-1 md:p-1.5">
					<div className="rounded-[15px] bg-white p-6 shadow-sm md:p-8">
					<div>
						<h2 className="text-xl font-extrabold tracking-tight text-zinc-900 md:text-2xl">
							Fuel Your Business Growth
						</h2>
						<p className="mt-2 text-sm text-zinc-500 md:text-base">
							Get fast and flexible financing designed to fit your needs
						</p>

						<ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-zinc-700">
							<li>Rates starting at just 6.99%*</li>
							<li>Access up to $2M within 24 hours</li>
							<li>Loan terms from 6 months to 3 years</li>
							<li>Unsecured and secured loan options</li>
						</ul>

						<p className="mt-4 text-xs text-zinc-500 md:text-sm">
							To qualify: Your business must be in operation for at least 1 year, with $150k annual
							revenue.
						</p>

						<form className="mt-6 space-y-4">
							<div>
								<FieldLabel>Select Money</FieldLabel>
								<Select
									name="money"
									placeholder="$5,000 - $10,000"
									options={moneyOptions}
								/>
							</div>

							<div>
								<FieldLabel>Time in Business</FieldLabel>
								<Select
									name="timeInBusiness"
									placeholder="Please Select"
									options={timeInBusinessOptions}
								/>
							</div>

							<div>
								<FieldLabel>Avg. Monthly Revenue (Last 3 Months)</FieldLabel>
								<Select
									name="avgMonthlyRevenue"
									placeholder="Please Select"
									options={revenueOptions}
								/>
							</div>

							<div>
								<FieldLabel>How soon do you need the funds?</FieldLabel>
								<Select
									name="fundsTiming"
									placeholder="Please Select"
									options={timingOptions}
								/>
							</div>

							<div className="pt-2">
								<button
									type="submit"
									className="ml-auto block rounded-full bg-blue-600 px-10 py-3 text-sm font-bold text-white hover:bg-blue-700"
								>
									Next
								</button>
							</div>
						</form>
					</div>
					</div>
				</div>
			</div>
		</main>
	);
}
