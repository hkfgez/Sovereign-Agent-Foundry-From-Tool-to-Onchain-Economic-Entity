import { NextResponse } from "next/server";
import { covalentClient } from "../../../lib/proof/covalentClient";
import { walletFlows } from "../../../lib/proof/walletFlows";
import { mockSystemHealth } from "../../../lib/mock/mockProof";

export async function GET() {
  try {
    const metrics = await covalentClient();
    const events = walletFlows();

    return NextResponse.json({
      success: true,
      message: "Proof dashboard data loaded successfully.",
      data: {
        metrics,
        events,
        systemHealth: mockSystemHealth,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to load proof dashboard data.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
