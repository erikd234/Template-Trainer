import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
var CanvasJS = require('../../../assets/canvasjs.min');

@Component({
  selector: 'app-template-scatter-plot',
  templateUrl: './template-scatter-plot.component.html',
  styleUrls: ['./template-scatter-plot.component.css'],
})
export class TemplateScatterPlotComponent implements OnInit {
  csvRecords: any[] = [];
  header = true;

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {
    // Select the files from the event
    const files = $event.srcElement.files;
    console.log('File change listener ran');
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser
      .parse(files[0], { header: this.header, delimiter: ',' })
      .pipe()
      .subscribe(
        (result: any) => {
          console.log('Result', result);
          this.csvRecords = result;
          console.log(this.csvRecords);
          this.initializeData();
        },
        (error: NgxCSVParserError) => {
          console.log('Error', error);
        }
      );
  }
  constructor(private ngxCsvParser: NgxCsvParser) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    console.log('Something changed');
    let dataPoints = [];
    let y = 0;
    for (var i = 0; i < this.csvRecords.length; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y });
    }
    let chart = new CanvasJS.Chart('scatterPlotContainer', {
      zoomEnabled: false,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Performance Demo - 10000 DataPoints',
      },
      subtitles: [
        {
          text: 'Try Zooming and Panning',
        },
      ],
      data: [
        {
          type: 'line',
          dataPoints: dataPoints,
        },
      ],
    });

    chart.render();
  }
}
