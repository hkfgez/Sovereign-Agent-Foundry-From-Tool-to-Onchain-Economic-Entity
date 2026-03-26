export default function HomePage() {
  const pillars = [
    {
      title: "Identity Layer",
      description:
        "Create a persistent onchain identity for the core sovereign agent.",
    },
    {
      title: "Treasury Layer",
      description:
        "Initialize capital, define spending rules, and make the agent fundable.",
    },
    {
      title: "Market Layer",
      description:
        "Give the agent a public economic surface and market-facing structure.",
    },
    {
      title: "Sub-Agent Layer",
      description:
        "Allow the core agent to hire, fund, and coordinate specialized worker agents.",
    },
    {
      title: "Proof Layer",
      description:
        "Expose wallet flows, treasury state, and agent activity through a verifiable dashboard.",
    },
  ];

  const flow = [
    "Create the Core Agent",
    "Initialize Treasury",
    "Activate Market Layer",
    "Hire Sub-Agents",
    "Open Proof Dashboard",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
              Sovereign Agent Infrastructure
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Sovereign Agent Foundry
            </h1>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              From Tool to Onchain Economic Entity
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Sovereign Agent Foundry turns an AI agent from a disposable task
              runner into a structured onchain participant with identity,
              treasury, market access, sub-agent coordination, and proof of
              activity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/create-agent"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Launch Demo Flow
              </a>
              <a
                href="/dashboard"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                View Proof Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Product Thesis
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Agents that can act but cannot own are still tools.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/75">
              This project introduces the missing layer between AI automation and
              economic persistence. Instead of stopping at prompts, workflows,
              or execution logic, Sovereign Agent Foundry gives agents the
              minimum institutional structure required to operate onchain.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Demo Outcome
            </p>
            <ul className="mt-6 space-y-4">
              <li className="rounded-2xl border border-white/10 p-4">
                Onchain identity and wallet surface
              </li>
              <li className="rounded-2xl border border-white/10 p-4">
                Treasury initialization and allocation logic
              </li>
              <li className="rounded-2xl border border-white/10 p-4">
                Market-facing economic layer
              </li>
              <li className="rounded-2xl border border-white/10 p-4">
                Multi-agent funding and delegation structure
              </li>
              <li className="rounded-2xl border border-white/10 p-4">
                Proof dashboard for capital movement and activity traces
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Core Architecture
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Five modules define the sovereign agent stack.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Demo Flow
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              A clean five-step narrative.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {flow.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm text-white/45">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Closing
            </p>
            <h2 className="mt-4 max-w-3xl text-2xl font-semibold sm:text-4xl">
              We did not build another agent tool.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
              We built the minimum viable institution for an onchain agent.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/create-agent"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start Product Walkthrough
              </a>
              <a
                href="/dashboard"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
