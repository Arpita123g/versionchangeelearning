import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamedecisionchecklistComponent } from './logisticsmodegamedecisionchecklist.component';

describe('LogisticsmodegamedecisionchecklistComponent', () => {
  let component: LogisticsmodegamedecisionchecklistComponent;
  let fixture: ComponentFixture<LogisticsmodegamedecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamedecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamedecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
