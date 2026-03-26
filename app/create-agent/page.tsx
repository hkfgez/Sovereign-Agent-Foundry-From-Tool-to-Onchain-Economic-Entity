const subAgents = [
  {
    name: "Scout Agent",
    role: "Trend Discovery",
    budget: "$1,200",
    description:
      "Monitors market narratives, emerging signals, and candidate opportunity clusters.",
  },
  {
    name: "Treasury Monitor Agent",
    role: "Capital Oversight",
    budget: "$800",
    description:
      "Tracks budget usage, reserve threshold, and treasury allocation integrity.",
  },
];

export default function CreateAgentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <a
            href="/"
            className="text-sm text-white/45 transition hover:text-white/75"
          >
            ← Back to Home
          </a>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Demo Step 1 to Step 4
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Create the sovereign agent and initialize its operating structure.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/70">
              This page simulates the core operating flow of Sovereign Agent
              Foundry: create the primary agent, assign identity, initialize
              treasury, activate the market layer, and allocate capital to
              worker agents.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Core Agent
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Foundry Prime</h2>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Role
                </p>
                <p className="mt-2 text-white/85">Core Sovereign Agent</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Objective
                </p>
                <p className="mt-2 text-white/85">
                  Coordinate capital, delegate operational work, and expose
                  verifiable onchain activity.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Identity Status
                </p>
                <p className="mt-2 text-emerald-300">Registered</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Wallet
                </p>
                <p className="mt-2 break-all text-white/85">
                  8FKn...A93m...Prime
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Treasury Initialization
            </p>
            <h2 className="mt-4 text-2xl font-semibold">$10,000</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Reserve Threshold
                </p>
                <p className="mt-2 text-white/85">$2,000</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Allocation Policy
                </p>
                <p className="mt-2 text-white/85">Role-bound distribution</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Treasury State
                </p>
                <p className="mt-2 text-emerald-300">Initialized</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Spending Guard
                </p>
                <p className="mt-2 text-white/85">Enabled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Market Layer
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Economic Surface Activated
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              The core agent now has a market-facing layer. This is not shown as
              a speculative gimmick, but as the economic surface that makes the
              agent legible to capital, external observers, and future
              coordination layers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Token
                </p>
                <p className="mt-2 text-white/85">FDRY</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Status
                </p>
                <p className="mt-2 text-emerald-300">Live</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Market Type
                </p>
                <p className="mt-2 text-white/85">Agent Economic Layer</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Demo Status
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Core agent created",
                "Identity assigned",
                "Treasury initialized",
                "Market layer activated",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3"
                >
                  <span className="text-sm text-white/80">{item}</span>
                  <span className="text-sm text-emerald-300">Done</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Sub-Agent Hiring
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Budget is delegated to specialized worker agents.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {subAgents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                  {agent.role}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {agent.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                      Budget Allocation
                    </p>
                    <p className="mt-2 text-white/85">{agent.budget}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                      Funding Status
                    </p>
                    <p className="mt-2 text-emerald-300">Allocated</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/dashboard"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Continue to Proof Dashboard
            </a>
            <a
              href="/"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
