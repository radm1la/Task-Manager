import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  templateUrl: './column.html',
  styleUrl: './column.scss',
})
export class Column {
  @Input() column!: {id:string,label:string};
}
