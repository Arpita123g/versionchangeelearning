import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaindecisionchecklistComponent } from './valuechaindecisionchecklist.component';

describe('ValuechaindecisionchecklistComponent', () => {
  let component: ValuechaindecisionchecklistComponent;
  let fixture: ComponentFixture<ValuechaindecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaindecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaindecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
