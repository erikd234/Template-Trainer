import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { TemplateScatterPlotComponent } from './components/template-scatter-plot/template-scatter-plot.component';

@NgModule({
  declarations: [AppComponent, BarGraphComponent, TemplateScatterPlotComponent],
  imports: [BrowserModule, AppRoutingModule, NgxCsvParserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
