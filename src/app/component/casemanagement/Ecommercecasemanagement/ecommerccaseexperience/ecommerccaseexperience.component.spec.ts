import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccaseexperienceComponent } from './ecommerccaseexperience.component';

describe('EcommerccaseexperienceComponent', () => {
  let component: EcommerccaseexperienceComponent;
  let fixture: ComponentFixture<EcommerccaseexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccaseexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccaseexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
