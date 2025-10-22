import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicsynopsisComponent } from './accountingarabicsynopsis.component';

describe('AccountingingsynopsisComponent', () => {
  let component: AccountingArabicsynopsisComponent;
  let fixture: ComponentFixture<AccountingArabicsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
