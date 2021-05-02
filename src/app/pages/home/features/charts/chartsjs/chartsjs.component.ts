import {Component, OnInit} from '@angular/core';
import {Color, Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-chartsjs',
  templateUrl: './chartsjs.component.html',
  styleUrls: ['./chartsjs.component.scss']
})
export class ChartsjsComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices'},
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartData: ChartDataSets[] = [
    {data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits'}
  ];
  chartOptions = {
    responsive: true,
  };
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];
  radarChartData: ChartDataSets[] = [
    {data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis'}
  ];
  pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  pieChartData: SingleDataSet = [30, 50, 20];
  bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        {x: 15, y: 15, r: 15},
        {x: 25, y: 15, r: 25},
        {x: 36, y: 12, r: 33},
        {x: 10, y: 18, r: 18},
      ],
      label: 'Investment Equities',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
