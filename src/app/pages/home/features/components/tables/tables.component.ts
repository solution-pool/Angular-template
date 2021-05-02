import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  dataSource = [
    {id: 1, name: 'Peter Parker', alias: 'Spiderman', city: 'New York', publisher: 'Marvel'},
    {id: 2, name: 'Bruce Wayne', alias: 'Batman', city: 'Gotham City', publisher: 'DC'},
    {id: 3, name: 'Steve Rogers', alias: 'Captain America', city: 'New York', publisher: 'Marvel'},
    {id: 4, name: 'Tony Stark', alias: 'Iron Man', city: 'New York', publisher: 'Marvel'},
    {id: 5, name: 'Thor', alias: 'Thor', city: 'Asgasrd', publisher: 'Marvel'},
    {id: 6, name: 'Clark Kent - Kal-El', alias: 'Superman', city: 'Metropolis', publisher: 'DC'},
    {id: 7, name: 'Barry Allen', alias: 'Flash', city: 'Central City', publisher: 'DC'},
    {id: 8, name: 'Logan', alias: 'Wolverine', city: 'Canada', publisher: 'Marvel'},
    {id: 9, name: 'Diana Prince', alias: 'Wonder Woman', city: 'Themyscira', publisher: 'DC'},
    {id: 10, name: 'Natasha Romanoff', alias: 'Black Widow', city: 'Russia', publisher: 'Marvel'},
    {id: 10, name: 'Natasha Romanoff', alias: 'Black Widow', city: 'Russia', publisher: 'Marvel'},
    {id: 9, name: 'Diana Prince', alias: 'Wonder Woman', city: 'Themyscira', publisher: 'DC'},
    {id: 8, name: 'Logan', alias: 'Wolverine', city: 'Canada', publisher: 'Marvel'},
    {id: 7, name: 'Barry Allen', alias: 'Flash', city: 'Central City', publisher: 'DC'},
    {id: 6, name: 'Clark Kent - Kal-El', alias: 'Superman', city: 'Metropolis', publisher: 'DC'},
    {id: 5, name: 'Thor', alias: 'Thor', city: 'Asgasrd', publisher: 'Marvel'},
    {id: 4, name: 'Tony Stark', alias: 'Iron Man', city: 'New York', publisher: 'Marvel'},
    {id: 3, name: 'Steve Rogers', alias: 'Captain America', city: 'New York', publisher: 'Marvel'},
    {id: 2, name: 'Bruce Wayne', alias: 'Batman', city: 'Gotham City', publisher: 'DC'},
    {id: 1, name: 'Peter Parker', alias: 'Spiderman', city: 'New York', publisher: 'Marvel'}
  ];
  displayedColumns = ['position', 'name', 'alias', 'city', 'publisher'];
  size = 10;
  page = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
