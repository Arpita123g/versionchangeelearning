import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingArabicdecisionchecklistComponent } from './accountingarabicdecisionchecklist.component';

describe('AccountingingdecisionchecklistComponent', () => {
  let component: AccountingingArabicdecisionchecklistComponent;
  let fixture: ComponentFixture<AccountingingArabicdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingArabicdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingArabicdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
