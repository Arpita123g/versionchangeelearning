import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccaseeheaderComponent } from './ecommerccaseeheader.component';

describe('EcommerccaseeheaderComponent', () => {
  let component: EcommerccaseeheaderComponent;
  let fixture: ComponentFixture<EcommerccaseeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccaseeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccaseeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
