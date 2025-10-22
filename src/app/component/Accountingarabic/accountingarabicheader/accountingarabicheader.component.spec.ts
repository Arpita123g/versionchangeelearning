import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicheaderComponent } from './accountingarabicheader.component';

describe('AccountingheaderComponent', () => {
  let component: AccountingArabicheaderComponent;
  let fixture: ComponentFixture<AccountingArabicheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
