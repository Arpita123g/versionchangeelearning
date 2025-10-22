import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincaseproductionComponent } from './valuechaincaseproduction.component';

describe('ValuechaincaseproductionComponent', () => {
  let component: ValuechaincaseproductionComponent;
  let fixture: ComponentFixture<ValuechaincaseproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincaseproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincaseproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
