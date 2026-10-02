import { describe, expect, it } from "vitest";
import { addTask } from "../src/services/taskService.js";

describe("taskService", () => {
  it("creates a task", () => {
    const task = addTask("Learn runtime");
    expect(task.title).toBe("Learn runtime");
    expect(task.completed).toBe(false);
  });
});
