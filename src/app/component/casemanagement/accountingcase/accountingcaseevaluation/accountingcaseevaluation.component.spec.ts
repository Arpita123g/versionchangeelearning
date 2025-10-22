import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcaseevaluationComponent } from './accountingcaseevaluation.component';

describe('AccountingcaseevaluationComponent', () => {
  let component: AccountingcaseevaluationComponent;
  let fixture: ComponentFixture<AccountingcaseevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcaseevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcaseevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
