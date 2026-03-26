type TreasuryPanelProps = {
  balance: string;
  reserveThreshold: string;
  allocationPolicy: string;
  spendingGuard: string;
  status?: string;
};

export function TreasuryPanel({
  balance,
  reserveThreshold,
  allocationPolicy,
  spendingGuard,
  status = "Initialized",
}: TreasuryPanelProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.16em] text-white/40">
        Treasury Layer
      </p>

      <h3 className="mt-4 text-2xl font-semibold">{balance}</h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Reserve Threshold
          </p>
          <p className="mt-2 text-white/85">{reserveThreshold}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Allocation Policy
          </p>
          <p className="mt-2 text-white/85">{allocationPolicy}</p>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            Spending Guard
          </p>
          <p className="mt-2 text-white/85">{spendingGuard}</p>
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
