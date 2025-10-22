import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamewarehouseComponent } from './logisticsmodegamewarehouse.component';

describe('LogisticsmodegamewarehouseComponent', () => {
  let component: LogisticsmodegamewarehouseComponent;
  let fixture: ComponentFixture<LogisticsmodegamewarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamewarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamewarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
