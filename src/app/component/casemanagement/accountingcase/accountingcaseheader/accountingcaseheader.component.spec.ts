import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcaseheaderComponent } from './accountingcaseheader.component';

describe('AccountingcaseheaderComponent', () => {
  let component: AccountingcaseheaderComponent;
  let fixture: ComponentFixture<AccountingcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
