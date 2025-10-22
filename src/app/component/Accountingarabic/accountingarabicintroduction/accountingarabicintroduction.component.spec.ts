import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicintroductionComponent } from './accountingarabicintroduction.component';

describe('AccountingintroductionComponent', () => {
  let component: AccountingArabicintroductionComponent;
  let fixture: ComponentFixture<AccountingArabicintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
