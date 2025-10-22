import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingcasefoodforthoughtComponent } from './accountingcasefoodforthought.component';

describe('AccountingcasefoodforthoughtComponent', () => {
  let component: AccountingcasefoodforthoughtComponent;
  let fixture: ComponentFixture<AccountingcasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingcasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingcasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
