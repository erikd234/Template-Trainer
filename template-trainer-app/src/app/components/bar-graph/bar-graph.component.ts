import { Component, OnInit } from '@angular/core';
var CanvasJS = require('../../../assets/canvasjs.min');

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  ngOnInit() {
    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Segments Completed',
      },
      data: [
        {
          type: 'column',
          dataPoints: [
            { y: 71, label: 'Segment 1' },
            { y: 55, label: 'Segment 2' },
            { y: 50, label: 'Segment 3' },
            { y: 65, label: 'Segment 4' },
            { y: 95, label: 'Segment 5' },
            { y: 68, label: 'Segment 6' },
            { y: 28, label: 'Segment 7' },
            { y: 34, label: 'Segment 8' },
            { y: 14, label: 'Segment 9' },
          ],
        },
      ],
    });

    chart.render();
  }
}
