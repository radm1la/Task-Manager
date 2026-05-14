import { Component, inject, OnInit, signal } from '@angular/core';
import { Column } from './column/column';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-board',
  imports: [Column],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  private tasksService = inject(TaskService)
  columns = [
    { id: 'todo', label: 'To do' },
    { id: 'inProgress', label: 'In progress' },
    { id: 'done', label: 'Done' },
  ];

  tasks = this.tasksService.getAlltasks();

  getTasksByColumn(columnId:string){
    return this.tasks().filter((task) => task.column === columnId);
  }
}
