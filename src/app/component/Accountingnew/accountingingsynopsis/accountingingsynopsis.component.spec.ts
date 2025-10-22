import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingsynopsisComponent } from './accountingingsynopsis.component';

describe('AccountingingsynopsisComponent', () => {
  let component: AccountingingsynopsisComponent;
  let fixture: ComponentFixture<AccountingingsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
