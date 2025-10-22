import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcasememoComponent } from './accountingcasememo.component';

describe('AccountingcasememoComponent', () => {
  let component: AccountingcasememoComponent;
  let fixture: ComponentFixture<AccountingcasememoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcasememoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcasememoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
