import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticscasemarketComponent } from './logisticscasemarket.component';

describe('LogisticscasemarketComponent', () => {
  let component: LogisticscasemarketComponent;
  let fixture: ComponentFixture<LogisticscasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticscasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticscasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
