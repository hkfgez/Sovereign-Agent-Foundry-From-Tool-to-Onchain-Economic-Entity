/**
 * Demo Script: Hire Sub-Agents
 */

const subAgents = [
  {
    name: "Scout Agent",
    role: "Trend Discovery",
    budget: "$1,200",
    status: "Allocated",
  },
  {
    name: "Treasury Monitor Agent",
    role: "Capital Oversight",
    budget: "$800",
    status: "Allocated",
  },
];

console.log("=== Step 4: Hire Sub-Agents ===");

subAgents.forEach((agent, index) => {
  console.log(`Worker ${index + 1}: ${agent.name}`);
  console.log(`Role: ${agent.role}`);
  console.log(`Budget: ${agent.budget}`);
  console.log(`Status: ${agent.status}`);
  console.log("---");
});

console.log("Result: Specialized worker agents funded and activated.");
