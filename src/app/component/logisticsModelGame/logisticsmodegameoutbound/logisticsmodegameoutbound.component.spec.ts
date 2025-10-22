import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsmodegameoutboundComponent } from './logisticsmodegameoutbound.component';

describe('LogisticsmodegameoutboundComponent', () => {
  let component: LogisticsmodegameoutboundComponent;
  let fixture: ComponentFixture<LogisticsmodegameoutboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsmodegameoutboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsmodegameoutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
