# Architecture

Sovereign Agent Foundry is designed as a modular stack for turning an AI agent into an onchain economic entity.

The architecture is intentionally simple enough to demo clearly, but complete enough to communicate a coherent product vision.

---

## System Diagram

```text
[Human Operator / Builder]
            ↓
   [Core Agent Creation]
            ↓
    [Identity + Wallet Layer]
            ↓
      [Treasury Initialization]
            ↓
      [Market Layer Activation]
            ↓
    [Sub-Agent Hiring & Funding]
            ↓
      [Task Execution & Settlement]
            ↓
      [Proof Dashboard & Metrics]
```
Module Breakdown
1. Core Agent Creation

This is the entry point of the system.

A primary agent is created with:

name
purpose
operating goal
initial role description

This layer is important because it defines the identity of the future economic entity.

The primary agent is not framed as a helper bot.
It is framed as the initiating institution.

2. Identity + Wallet Layer

Once created, the core agent is assigned an onchain identity and wallet.

This gives the agent a persistent surface that can be referenced, funded, and tracked.

Responsibilities of this layer:

create or register the agent identity
attach wallet ownership or wallet representation
establish a canonical address for treasury tracking
provide a reusable identity surface for future interactions

Without this layer, the agent remains ephemeral.

With this layer, the agent becomes a visible participant.

3. Treasury Layer

The treasury layer is where the agent transitions from identity into economic structure.

The core treasury is initialized with:

starting balance
budget policy
allocation rules
optional reserve threshold

Responsibilities of this layer:

initialize agent treasury
enforce simple spending logic
allocate budget to worker agents
record settlements
expose treasury state to the dashboard

This layer is central to the product thesis.

An agent without treasury is still just execution software.
An agent with treasury begins to behave like an institution.

4. Market Layer

The market layer gives the agent a public economic interface.

This is where the agent becomes market-addressable.

At the demo level, this module is represented by:

token configuration
market launch state
initial economic metadata
public-facing market status

This layer is not included to chase speculation.
It exists to represent the idea that an agent can have a market-native capitalization surface.

That is the difference between a private workflow and an economic actor.

5. Sub-Agent Layer

The sub-agent layer introduces internal structure.

Instead of forcing the core agent to do everything, the system allows it to fund and coordinate specialized worker agents.

Example worker agents:

Scout Agent
Treasury Monitor Agent
Execution Agent

Responsibilities of this layer:

instantiate sub-agents
assign role labels
fund them from the main treasury
record which agent received what budget
support basic agent-to-agent structure

This is the first point where the project shows a real multi-agent economy.

The most important signal here is not complexity.
It is structured delegation.

6. Task Execution and Settlement

Once sub-agents receive budget, they can execute role-bound actions.

The output of this stage can be mocked or simplified for the demo.

Examples:

Scout Agent produces a trend signal
Treasury Agent validates budget usage
Execution Agent returns a completion message

This layer exists to demonstrate that capital moved for a reason, and that the reason can be traced.

7. Proof Layer

The proof layer aggregates system activity into an auditable dashboard.

Displayed metrics may include:

treasury balance
recent allocations
agent wallet flows
number of active sub-agents
settlement history
market layer status

This layer is critical because it converts the project from a conceptual narrative into a verifiable system.

The proof dashboard should make one thing obvious:

capital moved, agents acted, and the system can show evidence.

Design Philosophy

This architecture follows four principles:

Persistence

The agent should not feel temporary.

Economic Legibility

The system should make capital structure visible.

Delegation

The core agent should be able to fund and coordinate specialized agents.

Proof

Every important action should be externally explainable.

Minimal Demo Interpretation

To keep the demo clean, the architecture can be reduced to:

1 core agent
2 sub-agents
1 treasury
1 market layer
1 dashboard

That is enough to communicate the entire thesis without making the project feel inflated.

Architectural Summary

Sovereign Agent Foundry is not simply an app that lets an agent do more things.

It is a framework that gives an agent:

identity
capital
delegation
market surface
proof

That combination is what makes the agent look less like software and more like an institution.
