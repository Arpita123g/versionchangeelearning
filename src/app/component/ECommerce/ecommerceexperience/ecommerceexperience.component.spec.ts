import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceexperienceComponent } from './ecommerceexperience.component';

describe('EcommerceexperienceComponent', () => {
  let component: EcommerceexperienceComponent;
  let fixture: ComponentFixture<EcommerceexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
