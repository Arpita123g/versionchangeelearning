import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerccasemoduleComponent } from './ecommerccasemodule.component';

describe('EcommerccasemoduleComponent', () => {
  let component: EcommerccasemoduleComponent;
  let fixture: ComponentFixture<EcommerccasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerccasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerccasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
