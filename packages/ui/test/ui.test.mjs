import assert from "node:assert/strict";
import test from "node:test";
import { STANDARD_SECURITY_DISCLOSURE, SECURITY_DISCLOSURE } from "../dist/index.js";

test("the shared security disclosure retains the Page Apps contract", () => {
  assert.equal(STANDARD_SECURITY_DISCLOSURE, SECURITY_DISCLOSURE);
  assert.match(STANDARD_SECURITY_DISCLOSURE, /same origin/);
  assert.match(STANDARD_SECURITY_DISCLOSURE, /locally cached private data/);
  assert.match(STANDARD_SECURITY_DISCLOSURE, /fine-grained, expiring token/);
});
