import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscaseroutesandtechnologyComponent } from './logisticscaseroutesandtechnology.component';

describe('LogisticscaseroutesandtechnologyComponent', () => {
  let component: LogisticscaseroutesandtechnologyComponent;
  let fixture: ComponentFixture<LogisticscaseroutesandtechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscaseroutesandtechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscaseroutesandtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
