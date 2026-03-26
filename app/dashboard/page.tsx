const treasuryStats = [
  { label: "Current Treasury", value: "$8,000" },
  { label: "Allocated to Workers", value: "$2,000" },
  { label: "Reserve Threshold", value: "$2,000" },
  { label: "Treasury Status", value: "Healthy" },
];

const recentFlows = [
  {
    from: "Foundry Prime Treasury",
    to: "Scout Agent",
    amount: "$1,200",
    status: "Confirmed",
  },
  {
    from: "Foundry Prime Treasury",
    to: "Treasury Monitor Agent",
    amount: "$800",
    status: "Confirmed",
  },
  {
    from: "Scout Agent",
    to: "Signal Output",
    amount: "1 completed task",
    status: "Logged",
  },
  {
    from: "Treasury Monitor Agent",
    to: "Reserve Check",
    amount: "Policy validated",
    status: "Logged",
  },
];

const systemHealth = [
  "Core agent identity active",
  "Wallet surface visible",
  "Treasury initialized",
  "Market layer active",
  "Two sub-agents funded",
  "Proof layer recording events",
];

export default function DashboardPage() {
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

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                Proof Dashboard
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Visible evidence of agent activity, capital movement, and system
                state.
              </h1>
              <p className="mt-6 text-base leading-8 text-white/70">
                This dashboard turns the product from a conceptual narrative
                into an inspectable structure. The system can now show treasury
                state, funding records, active worker agents, and recent proof
                events.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:min-w-[280px]">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                Core Agent
              </p>
              <p className="mt-2 text-xl font-semibold">Foundry Prime</p>
              <p className="mt-4 text-sm text-white/65">
                Core Sovereign Agent
              </p>
              <div className="mt-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                Operational
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {treasuryStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-4 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Recent Proof Events
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Capital moved for explicit reasons.
            </h2>

            <div className="mt-8 space-y-4">
              {recentFlows.map((item, index) => (
                <div
                  key={`${item.from}-${item.to}-${index}`}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-white/45">From</p>
                      <p className="mt-1 text-white/85">{item.from}</p>
                    </div>
                    <div className="text-white/35">→</div>
                    <div>
                      <p className="text-sm text-white/45">To</p>
                      <p className="mt-1 text-white/85">{item.to}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/45">Output</p>
                      <p className="mt-1 text-white/85">{item.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/45">Status</p>
                      <p className="mt-1 text-emerald-300">{item.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              System Health
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Current operating state
            </h2>

            <div className="mt-8 space-y-3">
              {systemHealth.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3"
                >
                  <span className="text-sm text-white/80">{item}</span>
                  <span className="text-sm text-emerald-300">OK</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              Summary
            </p>
            <h2 className="mt-4 max-w-3xl text-2xl font-semibold sm:text-4xl">
              The agent is no longer only executing commands.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
              It now holds identity, capital, delegation capacity, and visible
              proof. That is the minimum shape of a sovereign onchain economic
              participant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/create-agent"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Review Demo Flow
              </a>
              <a
                href="/"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
