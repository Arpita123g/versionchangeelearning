import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingArabicfoodforthoughtComponent } from './accountingarabicfoodforthought.component';

describe('AccountingingfoodforthoughtComponent', () => {
  let component: AccountingArabicfoodforthoughtComponent;
  let fixture: ComponentFixture<AccountingArabicfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingArabicfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingArabicfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
