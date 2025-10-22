import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamesynopsisComponent } from './logisticsmodegamesynopsis.component';

describe('LogisticsmodegamesynopsisComponent', () => {
  let component: LogisticsmodegamesynopsisComponent;
  let fixture: ComponentFixture<LogisticsmodegamesynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamesynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamesynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
