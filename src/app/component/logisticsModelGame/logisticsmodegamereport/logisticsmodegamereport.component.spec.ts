import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamereportComponent } from './logisticsmodegamereport.component';

describe('LogisticsmodegamereportComponent', () => {
  let component: LogisticsmodegamereportComponent;
  let fixture: ComponentFixture<LogisticsmodegamereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
