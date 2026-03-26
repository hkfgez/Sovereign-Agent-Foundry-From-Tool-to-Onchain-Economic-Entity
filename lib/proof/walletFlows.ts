export type WalletFlow = {
  from: string;
  to: string;
  output: string;
  status: "Confirmed" | "Logged";
};

export function walletFlows(): WalletFlow[] {
  return [
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
}
