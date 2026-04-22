Testing Guidelines (TDD-ish for this project)
============================================
- Goal: Build confidence in data-layer logic early; UI tests can come later.
- Test runner: Vitest. To run tests locally: `npm install` (first time or after deps change), then `npm test`.
- What to test today:
  - Pure data access and transformation: sorting, filtering, mapping of JSON/MD data.
  - Edge cases: unknown keys, empty lists, boundary values.
- How to write tests:
  - Prefer pure functions with deterministic inputs.
  - Name tests clearly with a short description of the behavior under test.
  - Use a single test file per logical area (e.g., test/content.test.ts for data/content.ts).
- Test Organization:
  - Use describe blocks to group related tests.
  - Each test should be independent; avoid cross-test mutations.
- Practical checklist for new features:
  1. Write one or more unit tests that define the expected behavior.
  2. Implement the feature to satisfy tests.
  3. Run tests and ensure they pass locally.
  4. Add or update tests if public API changes.
- CI integration:
  - Ensure npm test runs in CI and reports success/failure.
- How to extend:
  - For UI work, add tests with @testing-library/react as a follow-up.
  - If introducing new utilities, add small unit tests for pure functions first.
