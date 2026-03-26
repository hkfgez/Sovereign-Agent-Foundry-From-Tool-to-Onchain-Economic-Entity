import { NextResponse } from "next/server";
import { initTreasury } from "../../../lib/treasury/initTreasury";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    const initialBalance = Number(body?.initialBalance ?? 10000);
    const reserveThreshold = Number(body?.reserveThreshold ?? 2000);
    const allocationPolicy =
      body?.allocationPolicy || "Role-bound distribution";

    const treasury = initTreasury({
      initialBalance,
      reserveThreshold,
      allocationPolicy,
    });

    return NextResponse.json({
      success: true,
      message: "Treasury initialized successfully.",
      data: treasury,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to initialize treasury.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
