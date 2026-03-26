type ProofEvent = {
  from: string;
  to: string;
  output: string;
  status: string;
};

type ProofDashboardProps = {
  treasuryBalance: string;
  allocations: string;
  activeAgents: string;
  marketStatus: string;
  events: ProofEvent[];
};

export function ProofDashboard({
  treasuryBalance,
  allocations,
  activeAgents,
  marketStatus,
  events,
}: ProofDashboardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
        Proof Layer
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        Verifiable system activity
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Treasury Balance
          </p>
          <p className="mt-2 text-white/85">{treasuryBalance}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Allocations
          </p>
          <p className="mt-2 text-white/85">{allocations}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Active Agents
          </p>
          <p className="mt-2 text-white/85">{activeAgents}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Market Status
          </p>
          <p className="mt-2 text-emerald-300">{marketStatus}</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {events.map((event, index) => (
          <div
            key={`${event.from}-${event.to}-${index}`}
            className="rounded-2xl border border-white/10 p-5"
          >
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  From
                </p>
                <p className="mt-2 text-sm text-white/85">{event.from}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  To
                </p>
                <p className="mt-2 text-sm text-white/85">{event.to}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Output
                </p>
                <p className="mt-2 text-sm text-white/85">{event.output}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Status
                </p>
                <p className="mt-2 text-sm text-emerald-300">{event.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
