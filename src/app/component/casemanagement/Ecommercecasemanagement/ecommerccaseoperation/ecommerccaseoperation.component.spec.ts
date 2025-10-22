import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccaseoperationComponent } from './ecommerccaseoperation.component';

describe('EcommerccaseoperationComponent', () => {
  let component: EcommerccaseoperationComponent;
  let fixture: ComponentFixture<EcommerccaseoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccaseoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccaseoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
