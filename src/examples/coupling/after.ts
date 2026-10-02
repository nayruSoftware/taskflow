// Lower coupling: business logic depends on a small contract.
export interface TaskRepository {
  create(title: string): { title: string; storedIn: string };
}

export function createTask(repository: TaskRepository, title: string) {
  return repository.create(title);
}
