export type ProofMetric = {
  label: string;
  value: string;
};

export async function covalentClient(): Promise<ProofMetric[]> {
  return Promise.resolve([
    { label: "Treasury Balance", value: "$8,000" },
    { label: "Allocated to Workers", value: "$2,000" },
    { label: "Active Agents", value: "3" },
    { label: "Market Status", value: "Live" },
  ]);
}
