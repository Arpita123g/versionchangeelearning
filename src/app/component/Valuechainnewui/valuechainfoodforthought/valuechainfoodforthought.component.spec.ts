import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuechainfoodforthoughtComponent } from './valuechainfoodforthought.component';

describe('ValuechainfoodforthoughtComponent', () => {
  let component: ValuechainfoodforthoughtComponent;
  let fixture: ComponentFixture<ValuechainfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuechainfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuechainfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
