import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingingevaluationComponent } from './accountingingevaluation.component';

describe('AccountingingevaluationComponent', () => {
  let component: AccountingingevaluationComponent;
  let fixture: ComponentFixture<AccountingingevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingingevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingingevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
