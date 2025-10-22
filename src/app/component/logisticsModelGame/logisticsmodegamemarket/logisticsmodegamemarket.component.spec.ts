import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegamemarketComponent } from './logisticsmodegamemarket.component';

describe('LogisticsmodegamemarketComponent', () => {
  let component: LogisticsmodegamemarketComponent;
  let fixture: ComponentFixture<LogisticsmodegamemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegamemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegamemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
