import { describe, expect, it } from "bun:test";
import * as os from "node:os";
describe("nodejs support os", () => {
  it("should suport os", () => {
    const arch = os.arch();
    expect(arch).toBe("x64");

    const type = os.type();
    expect(type).toBe("Windows_NT");
  });
});
