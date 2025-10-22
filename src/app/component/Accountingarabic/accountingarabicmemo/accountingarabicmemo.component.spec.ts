import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicmemoComponent } from './accountingarabicmemo.component';

describe('AccountingingmemoComponent', () => {
  let component: AccountingArabicmemoComponent;
  let fixture: ComponentFixture<AccountingArabicmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
