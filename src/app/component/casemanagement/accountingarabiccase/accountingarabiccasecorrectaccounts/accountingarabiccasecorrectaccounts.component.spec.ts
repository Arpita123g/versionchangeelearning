import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccasecorrectaccountsComponent } from './accountingarabiccasecorrectaccounts.component';

describe('AccountingarabiccasecorrectaccountsComponent', () => {
  let component: AccountingarabiccasecorrectaccountsComponent;
  let fixture: ComponentFixture<AccountingarabiccasecorrectaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccasecorrectaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccasecorrectaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
