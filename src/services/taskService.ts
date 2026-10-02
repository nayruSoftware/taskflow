import * as taskRepository from "../repositories/taskRepository.js";

export function listTasks() {
  return taskRepository.findAll();
}

export function addTask(title: string) {
  if (!title.trim()) throw new Error("Task title is required");
  return taskRepository.create(title.trim());
}

export function completeTask(id: number) {
  return taskRepository.markCompleted(id);
}

export function deleteTask(id: number) {
  return taskRepository.remove(id);
}
