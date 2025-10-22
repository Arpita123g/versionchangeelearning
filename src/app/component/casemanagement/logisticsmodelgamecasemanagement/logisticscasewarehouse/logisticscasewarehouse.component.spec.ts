import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscasewarehouseComponent } from './logisticscasewarehouse.component';

describe('LogisticscasewarehouseComponent', () => {
  let component: LogisticscasewarehouseComponent;
  let fixture: ComponentFixture<LogisticscasewarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscasewarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscasewarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
