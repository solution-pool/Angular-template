import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  @Input() menus = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
