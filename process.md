# Process

## Purpose

This project is used to build fidelity-first prototypes from Figma flows.

The main goal is to reproduce the selected Figma design as closely as possible for UX testing, usually on iPhone-sized screens, without overbuilding production infrastructure.

## Default Workflow

When working in this project, follow this order:

1. Read this `process.md` first.
2. Read any related spec or plan in `docs/superpowers/specs/` or `docs/superpowers/plans/`.
3. Read the provided Figma link and identify the exact flow, screens, overlays, and states in scope.
4. Confirm the target output is a mobile web prototype unless the user explicitly asks for another platform.
5. Implement the prototype with high visual fidelity before optimizing architecture.
6. Validate the result against Figma screen by screen before calling it done.

## Core Rules

### 1. Fidelity Comes First

- Match the Figma design as closely as possible.
- Aim for near-pixel-perfect fidelity on the target viewport.
- Preserve layout, spacing, typography, colors, radii, shadows, icon sizing, and visual hierarchy.
- Do not simplify visible UI details unless there is a clear technical reason.
- If a trade-off is necessary, preserve what the user sees before simplifying internal code.

### 2. Platform Defaults

- Default target: mobile web prototype
- Default device target: iPhone-sized viewport
- Default delivery: hosted URL for a small tester group
- Default hosting: Vercel or Netlify

Do not switch to native mobile, desktop-first web, or backend-connected architecture unless the user explicitly asks for it.

### 3. State and Data Rules

- Use local mocked data by default.
- Use local state by default.
- Do not add backend integration unless explicitly requested.
- Make the prototype partially functional when appropriate: users should be able to tap, enter data, edit data, open overlays, and move through the selected flow.

### 4. Scope Control

- Implement only the selected Figma flow or section.
- Include the screens, overlays, trays, modals, and important states required for that flow.
- Do not expand into unrelated product areas.
- Do not invent extra product requirements not shown in Figma or requested by the user.

### 5. Adapt Generic Plans

If using a reusable implementation plan, adapt the generic placeholders to the real flow:

- replace generic screen names with actual screen names
- replace generic mock data with real content structure from the Figma flow
- replace generic helper or input states with the actual states shown in design
- update tests and fidelity checklist to reflect the actual flow

Do not leave generic labels in the finished prototype if the real design provides specific ones.

## Recommended Technical Shape

Unless the user says otherwise, prefer:

- `Vite + React + TypeScript`
- `CSS Modules`
- `Zustand` for local prototype state
- `Vitest` + `Testing Library` for unit tests
- `Playwright` for viewport and smoke checks

Keep the architecture simple:

- one mobile shell
- focused screen components
- focused overlay components
- local mock data
- local state store
- lightweight validation and interaction logic

## Figma Import Instructions

When the user asks to import a screen or flow from Figma:

1. Read this file first.
2. Read the Figma link carefully.
3. Identify the exact screen set in scope.
4. Build the UI to match the Figma as closely as possible.
5. Keep the prototype constrained to an iPhone-sized mobile web viewport unless instructed otherwise.
6. Use exported assets or exact equivalents where needed.
7. Reproduce important variants and states that affect UX testing.

If the Figma node contains multiple variants, implement the ones necessary for realistic testing of the selected flow.

## QA Expectations

Before considering the work complete:

- compare each important screen against Figma
- verify spacing and alignment
- verify typography and hierarchy
- verify overlays and bottom actions
- verify important states such as empty, input, helper, success, error, or alternate variants
- verify the result on the intended mobile-sized viewport
- verify the hosted or local preview works reliably

## Prompting Pattern

Use this pattern when starting a new task:

`Read process.md first, then implement this Figma flow as a fidelity-first iPhone-sized mobile web prototype: <figma link>.`

Longer version:

`Read process.md first. Use the project plan and process as the execution baseline. Implement this Figma flow as a fidelity-first mobile web prototype that matches the design as closely as possible, uses local mock state, avoids backend integration, includes the important states and overlays in scope, and is ready to deploy by URL for tester review.`

## What To Avoid

- generic responsive redesigns
- backend work not requested by the user
- desktop-first layout decisions
- replacing exact Figma details with approximations when exact reproduction is practical
- expanding scope beyond the selected flow
- overengineering the architecture before the UI matches the design

## Definition Of Done

The work is done when:

- the selected Figma flow is implemented
- the prototype visually matches Figma closely on the target viewport
- the important states are interactive
- the implementation stays within the requested scope
- the prototype can be previewed or deployed for testers
