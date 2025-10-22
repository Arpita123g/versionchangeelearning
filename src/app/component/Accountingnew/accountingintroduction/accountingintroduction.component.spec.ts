import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingintroductionComponent } from './accountingintroduction.component';

describe('AccountingintroductionComponent', () => {
  let component: AccountingintroductionComponent;
  let fixture: ComponentFixture<AccountingintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
