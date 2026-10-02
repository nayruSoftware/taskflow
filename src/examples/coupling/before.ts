// High coupling: business logic knows the concrete storage implementation.
class SqlTaskTable {
  insert(title: string) {
    return { title, storedIn: "SQL" };
  }
}

export function createTask(title: string) {
  const table = new SqlTaskTable();
  return table.insert(title);
}
