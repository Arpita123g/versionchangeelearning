import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcasemoduleComponent } from './accountingcasemodule.component';

describe('AccountingcasemoduleComponent', () => {
  let component: AccountingcasemoduleComponent;
  let fixture: ComponentFixture<AccountingcasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
