import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccasememoComponent } from './accountingarabiccasememo.component';

describe('AccountingarabiccasememoComponent', () => {
  let component: AccountingarabiccasememoComponent;
  let fixture: ComponentFixture<AccountingarabiccasememoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccasememoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccasememoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
