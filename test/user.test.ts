import { describe, expect, it } from "bun:test";
import { User } from "../packages/user/user";

describe("User pacakage", () => {
  it("should accessed from main pacakage", () => {
    const user = new User("budi");
    expect(user.name).toBe("budi");
  });
});
