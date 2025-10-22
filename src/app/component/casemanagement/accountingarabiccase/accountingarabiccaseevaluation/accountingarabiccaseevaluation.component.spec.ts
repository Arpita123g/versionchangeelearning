import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabiccaseevaluationComponent } from './accountingarabiccaseevaluation.component';

describe('AccountingarabiccaseevaluationComponent', () => {
  let component: AccountingarabiccaseevaluationComponent;
  let fixture: ComponentFixture<AccountingarabiccaseevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabiccaseevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabiccaseevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
