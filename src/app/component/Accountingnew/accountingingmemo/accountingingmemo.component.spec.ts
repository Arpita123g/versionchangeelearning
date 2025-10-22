import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingmemoComponent } from './accountingingmemo.component';

describe('AccountingingmemoComponent', () => {
  let component: AccountingingmemoComponent;
  let fixture: ComponentFixture<AccountingingmemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingmemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
