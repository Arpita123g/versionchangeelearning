import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingdecisionchecklistComponent } from './accountingingdecisionchecklist.component';

describe('AccountingingdecisionchecklistComponent', () => {
  let component: AccountingingdecisionchecklistComponent;
  let fixture: ComponentFixture<AccountingingdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
