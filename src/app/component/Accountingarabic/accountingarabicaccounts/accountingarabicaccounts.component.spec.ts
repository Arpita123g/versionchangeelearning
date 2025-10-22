import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicaccountsComponent } from './accountingarabicaccounts.component';

describe('AccountingingaccountsComponent', () => {
  let component: AccountingArabicaccountsComponent;
  let fixture: ComponentFixture<AccountingArabicaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
