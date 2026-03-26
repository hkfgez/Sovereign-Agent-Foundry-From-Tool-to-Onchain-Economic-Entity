export type TokenConfig = {
  name: string;
  symbol: string;
  supplyModel: "fixed" | "dynamic";
  description: string;
};

export const defaultTokenConfig: TokenConfig = {
  name: "Foundry Sovereign Unit",
  symbol: "FDRY",
  supplyModel: "dynamic",
  description:
    "A market-facing token layer representing the economic surface of the sovereign agent.",
};
