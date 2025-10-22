import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingaccountsComponent } from './accountingingaccounts.component';

describe('AccountingingaccountsComponent', () => {
  let component: AccountingingaccountsComponent;
  let fixture: ComponentFixture<AccountingingaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
