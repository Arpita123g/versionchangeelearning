import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechaincasefoodforthoughtComponent } from './valuechaincasefoodforthought.component';

describe('ValuechaincasefoodforthoughtComponent', () => {
  let component: ValuechaincasefoodforthoughtComponent;
  let fixture: ComponentFixture<ValuechaincasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechaincasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechaincasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
