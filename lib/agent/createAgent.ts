export type CoreAgentInput = {
  name: string;
  role: string;
  objective: string;
};

export type CoreAgent = {
  id: string;
  name: string;
  role: string;
  objective: string;
  createdAt: string;
  status: "initialized" | "active";
};

export function createAgent(input: CoreAgentInput): CoreAgent {
  return {
    id: `agent_${input.name.toLowerCase().replace(/\s+/g, "_")}`,
    name: input.name,
    role: input.role,
    objective: input.objective,
    createdAt: new Date().toISOString(),
    status: "initialized",
  };
}
