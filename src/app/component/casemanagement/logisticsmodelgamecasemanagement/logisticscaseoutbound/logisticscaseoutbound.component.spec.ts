import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscaseoutboundComponent } from './logisticscaseoutbound.component';

describe('LogisticscaseoutboundComponent', () => {
  let component: LogisticscaseoutboundComponent;
  let fixture: ComponentFixture<LogisticscaseoutboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscaseoutboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscaseoutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
