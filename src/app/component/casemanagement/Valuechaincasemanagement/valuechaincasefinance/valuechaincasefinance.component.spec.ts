import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasefinanceComponent } from './valuechaincasefinance.component';

describe('ValuechaincasefinanceComponent', () => {
  let component: ValuechaincasefinanceComponent;
  let fixture: ComponentFixture<ValuechaincasefinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasefinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
