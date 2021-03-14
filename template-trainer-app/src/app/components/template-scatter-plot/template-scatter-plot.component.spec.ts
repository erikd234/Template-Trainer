import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScatterPlotComponent } from './template-scatter-plot.component';

describe('TemplateScatterPlotComponent', () => {
  let component: TemplateScatterPlotComponent;
  let fixture: ComponentFixture<TemplateScatterPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateScatterPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateScatterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
