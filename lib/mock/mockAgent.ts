export const mockCoreAgent = {
  name: "Foundry Prime",
  role: "Core Sovereign Agent",
  status: "Operational",
  wallet: "8FKn...A93m...Prime",
  objective:
    "Coordinate capital, delegate work to sub-agents, and expose auditable onchain activity.",
};

export const mockSubAgents = [
  {
    name: "Scout Agent",
    role: "Trend Discovery",
    budget: "$1,200",
    status: "Allocated",
    description:
      "Scans market narratives, identifies emerging signals, and returns candidate opportunity clusters.",
  },
  {
    name: "Treasury Monitor Agent",
    role: "Capital Oversight",
    budget: "$800",
    status: "Allocated",
    description:
      "Monitors budget usage, reserve threshold, and treasury integrity across agent operations.",
  },
];
