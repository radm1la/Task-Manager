import { Component, Input } from '@angular/core';
import { Task } from '../../../shared/models/task.model';
import { TaskCard } from './task-card/task-card';

@Component({
  selector: 'app-column',
  imports: [TaskCard],
  templateUrl: './column.html',
  styleUrl: './column.scss',
})
export class Column {
  @Input() column!: {id:string,label:string};
  @Input() tasks!:Task[];
}
