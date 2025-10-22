import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingheaderComponent } from './accountingheader.component';

describe('AccountingheaderComponent', () => {
  let component: AccountingheaderComponent;
  let fixture: ComponentFixture<AccountingheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
