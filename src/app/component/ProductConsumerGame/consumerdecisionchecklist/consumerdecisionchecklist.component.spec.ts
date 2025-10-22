import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerdecisionchecklistComponent } from './consumerdecisionchecklist.component';

describe('ConsumerdecisionchecklistComponent', () => {
  let component: ConsumerdecisionchecklistComponent;
  let fixture: ComponentFixture<ConsumerdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
