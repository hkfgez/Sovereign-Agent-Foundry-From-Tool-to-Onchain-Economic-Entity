import { NextResponse } from "next/server";
import { defaultTokenConfig } from "../../../lib/market/tokenConfig";
import { launchABCMarket } from "../../../lib/market/launchABCMarket";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    const tokenConfig = {
      name: body?.name || defaultTokenConfig.name,
      symbol: body?.symbol || defaultTokenConfig.symbol,
      supplyModel: body?.supplyModel || defaultTokenConfig.supplyModel,
      description: body?.description || defaultTokenConfig.description,
    };

    const market = launchABCMarket(tokenConfig);

    return NextResponse.json({
      success: true,
      message: "Market layer activated successfully.",
      data: market,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to launch market layer.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
