import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscasemoduleComponent } from './logisticscasemodule.component';

describe('LogisticscasemoduleComponent', () => {
  let component: LogisticscasemoduleComponent;
  let fixture: ComponentFixture<LogisticscasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
