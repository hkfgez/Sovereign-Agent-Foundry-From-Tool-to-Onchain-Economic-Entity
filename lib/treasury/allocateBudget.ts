import type { TreasuryState } from "./initTreasury";

export type BudgetAllocation = {
  from: string;
  to: string;
  amount: number;
  reason: string;
  createdAt: string;
};

export type AllocationResult = {
  treasury: TreasuryState;
  allocation: BudgetAllocation;
};

export function allocateBudget(
  treasury: TreasuryState,
  input: {
    from: string;
    to: string;
    amount: number;
    reason: string;
  }
): AllocationResult {
  const updatedBalance = treasury.currentBalance - input.amount;

  const nextStatus: TreasuryState["status"] =
    updatedBalance < treasury.reserveThreshold ? "warning" : "healthy";

  return {
    treasury: {
      ...treasury,
      currentBalance: updatedBalance,
      status: nextStatus,
    },
    allocation: {
      from: input.from,
      to: input.to,
      amount: input.amount,
      reason: input.reason,
      createdAt: new Date().toISOString(),
    },
  };
}
