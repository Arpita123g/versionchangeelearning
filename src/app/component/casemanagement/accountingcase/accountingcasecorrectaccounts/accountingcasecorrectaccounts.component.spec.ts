import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcasecorrectaccountsComponent } from './accountingcasecorrectaccounts.component';

describe('AccountingcasecorrectaccountsComponent', () => {
  let component: AccountingcasecorrectaccountsComponent;
  let fixture: ComponentFixture<AccountingcasecorrectaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcasecorrectaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcasecorrectaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
