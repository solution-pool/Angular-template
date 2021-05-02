import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-sidebar-header',
  templateUrl: './home-sidebar-header.component.html',
  styleUrls: ['./home-sidebar-header.component.scss']
})
export class HomeSidebarHeaderComponent implements OnInit {
  time = new Date();
  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
