import { Component } from '@angular/core';
import { Column } from "./column/column";

@Component({
  selector: 'app-board',
  imports: [Column],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  columns = [
    { id: 'todo', label: 'To do' },
    { id: 'inProgress', label: 'In progress' },
    { id: 'done', label: 'Done' },
  ];
}
