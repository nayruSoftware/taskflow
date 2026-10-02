export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  { id: 1, title: "Record Tutorial 01", completed: false },
  { id: 2, title: "Review terminology", completed: true }
];

export function findAll(): Task[] {
  return [...tasks];
}

export function create(title: string): Task {
  const task = { id: tasks.length + 1, title, completed: false };
  tasks.push(task);
  return task;
}

export function markCompleted(id: number): Task | undefined {
  const task = tasks.find((item) => item.id === id);
  if (task) task.completed = true;
  return task;
}

export function remove(id: number): boolean {
  const index = tasks.findIndex((item) => item.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
