import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicreportComponent } from './accountingarabicreport.component';

describe('AccountingingreportComponent', () => {
  let component: AccountingArabicreportComponent;
  let fixture: ComponentFixture<AccountingArabicreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
