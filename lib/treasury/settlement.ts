import type { TreasuryState } from "./initTreasury";

export type SettlementRecord = {
  agent: string;
  result: string;
  status: "logged" | "settled";
  createdAt: string;
};

export function settlement(
  treasury: TreasuryState,
  agent: string,
  result: string
): { treasury: TreasuryState; record: SettlementRecord } {
  return {
    treasury: {
      ...treasury,
      status:
        treasury.currentBalance < treasury.reserveThreshold ? "warning" : "healthy",
    },
    record: {
      agent,
      result,
      status: "logged",
      createdAt: new Date().toISOString(),
    },
  };
}
