import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccasefoodforthoughtComponent } from './ecommerccasefoodforthought.component';

describe('EcommerccasefoodforthoughtComponent', () => {
  let component: EcommerccasefoodforthoughtComponent;
  let fixture: ComponentFixture<EcommerccasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
