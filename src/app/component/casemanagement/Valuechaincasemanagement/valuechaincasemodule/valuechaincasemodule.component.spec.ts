import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasemoduleComponent } from './valuechaincasemodule.component';

describe('ValuechaincasemoduleComponent', () => {
  let component: ValuechaincasemoduleComponent;
  let fixture: ComponentFixture<ValuechaincasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
