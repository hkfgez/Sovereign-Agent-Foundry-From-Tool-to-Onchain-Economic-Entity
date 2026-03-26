import { NextResponse } from "next/server";
import { createAgent } from "../../../lib/agent/createAgent";
import { registerIdentity } from "../../../lib/agent/registerIdentity";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    const name = body?.name || "Foundry Prime";
    const role = body?.role || "Core Sovereign Agent";
    const objective =
      body?.objective ||
      "Coordinate capital, delegate work, and expose verifiable onchain activity.";

    const agent = createAgent({
      name,
      role,
      objective,
    });

    const identity = registerIdentity(agent, body?.network || "solana-devnet");

    return NextResponse.json({
      success: true,
      message: "Core agent created successfully.",
      data: {
        agent: {
          ...agent,
          status: "active",
        },
        identity,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create core agent.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
