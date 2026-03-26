type SubAgent = {
  name: string;
  role: string;
  budget: string;
  status: string;
  description: string;
};

type SubAgentListProps = {
  agents: SubAgent[];
};

export function SubAgentList({ agents }: SubAgentListProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
        Sub-Agent Layer
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        Specialized worker agents
      </h3>

      <div className="mt-6 space-y-4">
        {agents.map((agent) => (
          <div
            key={`${agent.name}-${agent.role}`}
            className="rounded-2xl border border-white/10 p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-medium">{agent.name}</p>
                <p className="mt-1 text-sm text-white/55">{agent.role}</p>
              </div>

              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                {agent.status}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/70">
              {agent.description}
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                Budget Allocation
              </p>
              <p className="mt-2 text-white/85">{agent.budget}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
