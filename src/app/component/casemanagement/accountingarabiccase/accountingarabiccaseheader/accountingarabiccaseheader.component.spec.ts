import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccaseheaderComponent } from './accountingarabiccaseheader.component';

describe('AccountingarabiccaseheaderComponent', () => {
  let component: AccountingarabiccaseheaderComponent;
  let fixture: ComponentFixture<AccountingarabiccaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
