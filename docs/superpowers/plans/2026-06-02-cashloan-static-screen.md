# Cashloan Static Screen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fidelity-first static mobile web prototype for Figma node `4:1592` so the screen can be previewed locally and validated against the design.

**Architecture:** Use a minimal Vite + React + TypeScript app with one mobile shell and one screen component. Keep the first pass static, using CSS for exact spacing and the Figma asset URLs for the nav and reward icons.

**Tech Stack:** Vite, React, TypeScript, CSS, Vitest, Testing Library

---

### Task 1: Scaffold the prototype shell

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `vitest.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/styles.css`

- [ ] **Step 1: Create the project scaffold**

Create the minimal Vite + React + TypeScript project files and scripts needed for dev, build, and test.

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: dependencies installed with no blocking errors

### Task 2: Add a failing screen render test

**Files:**
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write a render test**

Assert that the page contains the main title, the customer-code heading, and the placeholder text from the Figma screen.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL because the placeholder app does not render the required screen content

### Task 3: Implement the static screen

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Build the mobile shell and screen layout**

Render a centered 375x812 mobile frame with the header background, nav row, reward hint row, and outlined input field.

- [ ] **Step 2: Match the visual tokens**

Use the colors, spacing, radii, border weights, and typography hierarchy from the Figma design.

- [ ] **Step 3: Re-run tests**

Run: `npm test`
Expected: PASS

### Task 4: Verify the production build

**Files:**
- Modify: none unless fixes are needed

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build completes successfully and outputs a Vite production bundle
