import { describe, expect, it } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun test runner", () => {
  it("should suport unit test", () => {
    const response = sayHello("world");
    expect(response).toBe("Hello, world!");
  });
  it("should suport unit test", () => {
    const response = sayHello("budi");
    expect(response).toBe("Hello, budi!");
  });
});
