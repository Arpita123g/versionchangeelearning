import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasedemandComponent } from './valuechaincasedemand.component';

describe('ValuechaincasedemandComponent', () => {
  let component: ValuechaincasedemandComponent;
  let fixture: ComponentFixture<ValuechaincasedemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasedemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasedemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
