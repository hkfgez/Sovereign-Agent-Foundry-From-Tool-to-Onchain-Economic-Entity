type AgentCardProps = {
  name: string;
  role: string;
  status?: string;
  wallet?: string;
  objective?: string;
};

export function AgentCard({
  name,
  role,
  status = "Active",
  wallet,
  objective,
}: AgentCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
        Agent Profile
      </p>

      <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-white/65">{role}</p>

      <div className="mt-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
        {status}
      </div>

      {objective ? (
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Objective
          </p>
          <p className="mt-2 text-sm leading-7 text-white/80">{objective}</p>
        </div>
      ) : null}

      {wallet ? (
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Wallet
          </p>
          <p className="mt-2 break-all text-sm text-white/80">{wallet}</p>
        </div>
      ) : null}
    </div>
  );
}
