import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccasemarketingComponent } from './ecommerccasemarketing.component';

describe('EcommerccasemarketingComponent', () => {
  let component: EcommerccasemarketingComponent;
  let fixture: ComponentFixture<EcommerccasemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccasemarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccasemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
