import { Router } from "express";
import { addTask, completeTask, deleteTask, listTasks } from "../services/taskService.js";

export const taskRouter = Router();

taskRouter.get("/tasks", (_req, res) => {
  res.json(listTasks());
});

taskRouter.post("/tasks", (req, res) => {
  try {
    const task = addTask(String(req.body?.title ?? ""));
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : "Invalid task" });
  }
});

taskRouter.patch("/tasks/:id/complete", (req, res) => {
  const task = completeTask(Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

taskRouter.delete("/tasks/:id", (req, res) => {
  const deleted = deleteTask(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
});
