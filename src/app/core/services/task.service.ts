import { Injectable, signal } from '@angular/core';
import { MOCK_TASKS } from '../../shared/mock-data/mock.tasks';
import { Task } from '../../shared/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>(MOCK_TASKS);


  getAlltasks(){
    return this.tasks.asReadonly();
  }
}
