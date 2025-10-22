import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccasemoduleComponent } from './accountingarabiccasemodule.component';

describe('AccountingarabiccasemoduleComponent', () => {
  let component: AccountingarabiccasemoduleComponent;
  let fixture: ComponentFixture<AccountingarabiccasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
