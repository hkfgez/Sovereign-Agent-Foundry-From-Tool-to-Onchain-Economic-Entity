import type { TokenConfig } from "./tokenConfig";

export type MarketLaunch = {
  marketId: string;
  tokenName: string;
  tokenSymbol: string;
  supplyModel: string;
  marketType: "Agent Economic Layer";
  status: "live";
  launchedAt: string;
};

export function launchABCMarket(config: TokenConfig): MarketLaunch {
  return {
    marketId: `market_${config.symbol.toLowerCase()}`,
    tokenName: config.name,
    tokenSymbol: config.symbol,
    supplyModel: config.supplyModel,
    marketType: "Agent Economic Layer",
    status: "live",
    launchedAt: new Date().toISOString(),
  };
}
