import { Component, Input } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe,TitleCasePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() task! : Task;
}
