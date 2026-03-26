export const mockProofEvents = [
  {
    from: "Foundry Prime Treasury",
    to: "Scout Agent",
    output: "$1,200 allocated",
    status: "Confirmed",
  },
  {
    from: "Foundry Prime Treasury",
    to: "Treasury Monitor Agent",
    output: "$800 allocated",
    status: "Confirmed",
  },
  {
    from: "Scout Agent",
    to: "Signal Output",
    output: "1 completed task",
    status: "Logged",
  },
  {
    from: "Treasury Monitor Agent",
    to: "Reserve Check",
    output: "Policy validated",
    status: "Logged",
  },
];

export const mockSystemHealth = [
  "Core agent identity active",
  "Wallet surface visible",
  "Treasury initialized",
  "Market layer active",
  "Two sub-agents funded",
  "Proof layer recording events",
];
