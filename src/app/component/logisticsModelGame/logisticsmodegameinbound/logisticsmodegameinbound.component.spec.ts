import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegameinboundComponent } from './logisticsmodegameinbound.component';

describe('LogisticsmodegameinboundComponent', () => {
  let component: LogisticsmodegameinboundComponent;
  let fixture: ComponentFixture<LogisticsmodegameinboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegameinboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegameinboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
