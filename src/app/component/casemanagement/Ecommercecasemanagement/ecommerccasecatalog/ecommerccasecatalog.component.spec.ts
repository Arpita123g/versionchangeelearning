import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccasecatalogComponent } from './ecommerccasecatalog.component';

describe('EcommerccasecatalogComponent', () => {
  let component: EcommerccasecatalogComponent;
  let fixture: ComponentFixture<EcommerccasecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccasecatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccasecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
