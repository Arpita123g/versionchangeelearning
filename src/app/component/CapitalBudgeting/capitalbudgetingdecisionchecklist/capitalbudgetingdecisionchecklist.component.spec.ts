import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalbudgetingdecisionchecklistComponent } from './capitalbudgetingdecisionchecklist.component';

describe('CapitalbudgetingdecisionchecklistComponent', () => {
  let component: CapitalbudgetingdecisionchecklistComponent;
  let fixture: ComponentFixture<CapitalbudgetingdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalbudgetingdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalbudgetingdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
