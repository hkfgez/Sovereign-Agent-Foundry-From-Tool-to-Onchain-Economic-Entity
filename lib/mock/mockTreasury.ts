export const mockTreasury = {
  currentBalance: "$8,000",
  initialBalance: "$10,000",
  reserveThreshold: "$2,000",
  allocatedToWorkers: "$2,000",
  allocationPolicy: "Role-bound distribution",
  spendingGuard: "Enabled",
  status: "Healthy",
};

export const mockAllocationHistory = [
  {
    from: "Foundry Prime Treasury",
    to: "Scout Agent",
    amount: "$1,200",
    reason: "Trend discovery budget",
  },
  {
    from: "Foundry Prime Treasury",
    to: "Treasury Monitor Agent",
    amount: "$800",
    reason: "Treasury oversight budget",
  },
];
