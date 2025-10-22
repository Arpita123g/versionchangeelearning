import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasemarketComponent } from './valuechaincasemarket.component';

describe('ValuechaincasemarketComponent', () => {
  let component: ValuechaincasemarketComponent;
  let fixture: ComponentFixture<ValuechaincasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
