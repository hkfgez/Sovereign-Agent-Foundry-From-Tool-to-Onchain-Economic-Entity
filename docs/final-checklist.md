# Final Checklist

This file is used to verify that Sovereign Agent Foundry is ready for demo, screenshots, and final submission.

The goal is not only to make the repository complete.

The goal is to make the project feel coherent, deliberate, and award-ready.

---

## A. File Structure Check

Confirm that the following files exist:

### Root
- README.md
- package.json
- tsconfig.json
- next-env.d.ts
- postcss.config.js
- tailwind.config.ts
- .env.example

### Docs
- docs/overview.md
- docs/architecture.md
- docs/demo-script.md
- docs/submission-checklist.md
- docs/visual-assets.md
- docs/final-checklist.md

### App Pages
- app/layout.tsx
- app/globals.css
- app/page.tsx
- app/create-agent/page.tsx
- app/dashboard/page.tsx

### API Routes
- app/api/create-agent/route.ts
- app/api/init-treasury/route.ts
- app/api/launch-market/route.ts
- app/api/hire-agent/route.ts
- app/api/proof/route.ts

### Components
- components/agent-card.tsx
- components/treasury-panel.tsx
- components/market-panel.tsx
- components/subagent-list.tsx
- components/proof-dashboard.tsx

### Lib
- lib/agent/createAgent.ts
- lib/agent/registerIdentity.ts
- lib/agent/hireSubAgent.ts
- lib/treasury/initTreasury.ts
- lib/treasury/allocateBudget.ts
- lib/treasury/settlement.ts
- lib/market/tokenConfig.ts
- lib/market/launchABCMarket.ts
- lib/proof/covalentClient.ts
- lib/proof/treasuryMetrics.ts
- lib/proof/walletFlows.ts
- lib/mock/mockAgent.ts
- lib/mock/mockTreasury.ts
- lib/mock/mockProof.ts

### Scripts
- scripts/demo-create-agent.ts
- scripts/demo-init-treasury.ts
- scripts/demo-launch-market.ts
- scripts/demo-hire-subagents.ts
- scripts/demo-proof.ts

---

## B. Product Narrative Check

Verify the project is consistently described as:

- a sovereign agent framework
- an onchain economic entity system
- a modular agent institution prototype
- a proof-oriented agent economy product

Do not describe it as:

- a chatbot
- a generic assistant
- a meme launcher
- a simple trading bot
- a prompt wrapper

---

## C. Demo Flow Check

Verify the five-step demo is stable and readable:

1. Create Core Agent
2. Initialize Treasury
3. Activate Market Layer
4. Hire Sub-Agents
5. Open Proof Dashboard

Keep the video linear.

Do not jump across pages too often.  
Do not add unnecessary clicks.  
Do not show unfinished pages.

---

## D. Visual Check

Before taking screenshots or recording video, verify:

- page spacing is clean
- cards align correctly
- no text overlaps
- dark theme is consistent
- CTA buttons are visible
- typography looks stable
- wallet strings do not break layout badly

---

## E. Screenshot Checklist

Recommended screenshots:

### 1. Homepage Hero
Capture:
- title
- subtitle
- two CTA buttons

### 2. Core Architecture Section
Capture:
- five module cards

### 3. Create Agent Page
Capture:
- core agent card
- treasury initialization card

### 4. Market + Demo Status Section
Capture:
- market layer panel
- demo progress items

### 5. Sub-Agent Section
Capture:
- two worker agent cards

### 6. Dashboard Overview
Capture:
- proof dashboard heading
- current treasury stats
- recent proof events

---

## F. Repo Quality Check

Before publishing the repository, verify:

- no placeholder lorem ipsum exists
- no duplicate files exist
- file names are clean and readable
- README matches the current UI
- docs do not contradict the demo
- scripts use the same project language as the pages

---

## G. Final Demo Reminder

The strongest final impression is simple:

The agent now has:
- identity
- treasury
- market surface
- delegation capacity
- proof

That is enough.

Do not overcomplicate the system just to look more technical.
