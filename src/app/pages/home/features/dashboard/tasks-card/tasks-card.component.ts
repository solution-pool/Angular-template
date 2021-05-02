import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss']
})
export class TasksCardComponent implements OnInit {
  @Input() tasks: { id: number, title: string, information: string }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
