type MarketPanelProps = {
  token: string;
  marketType: string;
  status: string;
  description?: string;
};

export function MarketPanel({
  token,
  marketType,
  status,
  description,
}: MarketPanelProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
        Market Layer
      </p>

      <h3 className="mt-4 text-2xl font-semibold">Economic Surface Active</h3>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/70">{description}</p>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Token
          </p>
          <p className="mt-2 text-white/85">{token}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Market Type
          </p>
          <p className="mt-2 text-white/85">{marketType}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Status
          </p>
          <p className="mt-2 text-emerald-300">{status}</p>
        </div>
      </div>
    </div>
  );
}
