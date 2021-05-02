import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-switches-tabs',
  templateUrl: './switches-&-tabs.component.html',
  styleUrls: ['./switches-&-tabs.component.scss']
})
export class SwitchesTabsComponent implements OnInit {
  off = {id: 1, name: 'OFF'};
  on = {id: 1, name: 'ON'};
  tabs = [
    {id: 1, name: 'First'},
    {id: 2, name: 'Second'},
    {id: 3, name: 'Third'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
