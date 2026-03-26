import type { TreasuryState } from "../treasury/initTreasury";

export type TreasuryMetricSummary = {
  currentBalance: string;
  reserveThreshold: string;
  status: string;
};

export function treasuryMetrics(
  treasury: TreasuryState
): TreasuryMetricSummary {
  return {
    currentBalance: `$${treasury.currentBalance.toLocaleString()}`,
    reserveThreshold: `$${treasury.reserveThreshold.toLocaleString()}`,
    status: treasury.status,
  };
}
