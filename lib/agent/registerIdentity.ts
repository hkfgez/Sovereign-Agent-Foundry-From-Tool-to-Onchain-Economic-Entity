import type { CoreAgent } from "./createAgent";

export type AgentIdentity = {
  agentId: string;
  identityStatus: "registered";
  walletAddress: string;
  network: string;
  registeredAt: string;
};

export function registerIdentity(
  agent: CoreAgent,
  network = "solana-devnet"
): AgentIdentity {
  const walletSuffix = Math.random().toString(36).slice(2, 8);

  return {
    agentId: agent.id,
    identityStatus: "registered",
    walletAddress: `SoV_${walletSuffix}_PrimeWallet`,
    network,
    registeredAt: new Date().toISOString(),
  };
}
