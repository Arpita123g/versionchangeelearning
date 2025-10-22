import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccasemarketComponent } from './ecommerccasemarket.component';

describe('EcommerccasemarketComponent', () => {
  let component: EcommerccasemarketComponent;
  let fixture: ComponentFixture<EcommerccasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
