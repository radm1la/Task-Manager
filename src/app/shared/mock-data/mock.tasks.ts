import { Task } from '../models/task.model';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Set up project',
    description: 'Install Angular CLI and CDK',
    priority: 'high',
    column: 'done',
    createdAt: new Date('2024-05-01')
  },
  {
    id: '2',
    title: 'Build TaskService',
    description: 'BehaviorSubject, CRUD, localStorage',
    priority: 'high',
    column: 'inProgress',
    createdAt: new Date('2024-05-03')
  },
  {
    id: '3',
    title: 'Design task card',
    description: 'Style the card component',
    priority: 'medium',
    column: 'todo',
    createdAt: new Date('2024-05-05')
  },
  {
    id: '4',
    title: 'Add drag and drop',
    description: 'Wire up CDK DragDropModule',
    priority: 'low',
    column: 'todo',
    createdAt: new Date('2024-05-06')
  }
]