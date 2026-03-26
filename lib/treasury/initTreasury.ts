export type TreasuryConfig = {
  initialBalance: number;
  reserveThreshold: number;
  allocationPolicy: string;
};

export type TreasuryState = {
  initialBalance: number;
  currentBalance: number;
  reserveThreshold: number;
  allocationPolicy: string;
  spendingGuard: "enabled";
  status: "initialized" | "healthy" | "warning";
  createdAt: string;
};

export function initTreasury(config: TreasuryConfig): TreasuryState {
  return {
    initialBalance: config.initialBalance,
    currentBalance: config.initialBalance,
    reserveThreshold: config.reserveThreshold,
    allocationPolicy: config.allocationPolicy,
    spendingGuard: "enabled",
    status:
      config.initialBalance >= config.reserveThreshold ? "initialized" : "warning",
    createdAt: new Date().toISOString(),
  };
}
