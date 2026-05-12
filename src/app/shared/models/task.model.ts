export type Priority = 'low' | 'medium' | 'high';
export type Column = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  column: Column;
  createdAt: Date;
}
