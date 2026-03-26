import { NextResponse } from "next/server";
import { hireSubAgent } from "../../../lib/agent/hireSubAgent";
import { initTreasury } from "../../../lib/treasury/initTreasury";
import { allocateBudget } from "../../../lib/treasury/allocateBudget";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    const subAgent = hireSubAgent({
      name: body?.name || "Scout Agent",
      role: body?.role || "Trend Discovery",
      description:
        body?.description ||
        "Scans narratives, identifies signals, and returns opportunity candidates.",
    });

    const treasury = initTreasury({
      initialBalance: Number(body?.initialBalance ?? 10000),
      reserveThreshold: Number(body?.reserveThreshold ?? 2000),
      allocationPolicy: body?.allocationPolicy || "Role-bound distribution",
    });

    const amount = Number(body?.amount ?? 1200);

    const result = allocateBudget(treasury, {
      from: body?.from || "Foundry Prime Treasury",
      to: subAgent.name,
      amount,
      reason: body?.reason || `${subAgent.role} budget allocation`,
    });

    return NextResponse.json({
      success: true,
      message: "Sub-agent hired and funded successfully.",
      data: {
        subAgent: {
          ...subAgent,
          status: "funded",
        },
        allocation: result.allocation,
        treasury: result.treasury,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to hire sub-agent.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
