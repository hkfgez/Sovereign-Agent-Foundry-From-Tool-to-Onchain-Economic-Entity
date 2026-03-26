export type SubAgentRole =
  | "Trend Discovery"
  | "Capital Oversight"
  | "Execution"
  | "Monitoring";

export type SubAgentInput = {
  name: string;
  role: SubAgentRole;
  description: string;
};

export type SubAgent = {
  id: string;
  name: string;
  role: SubAgentRole;
  description: string;
  status: "funded" | "idle";
  createdAt: string;
};

export function hireSubAgent(input: SubAgentInput): SubAgent {
  return {
    id: `subagent_${input.name.toLowerCase().replace(/\s+/g, "_")}`,
    name: input.name,
    role: input.role,
    description: input.description,
    status: "idle",
    createdAt: new Date().toISOString(),
  };
}
