import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscaseinboundComponent } from './logisticscaseinbound.component';

describe('LogisticscaseinboundComponent', () => {
  let component: LogisticscaseinboundComponent;
  let fixture: ComponentFixture<LogisticscaseinboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscaseinboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscaseinboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
