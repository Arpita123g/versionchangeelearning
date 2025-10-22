import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingarabicevaluationComponent } from './accountingarabicevaluation.component';

describe('AccountingingevaluationComponent', () => {
  let component: AccountingarabicevaluationComponent;
  let fixture: ComponentFixture<AccountingarabicevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingarabicevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingarabicevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
