import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceoperationsComponent } from './ecommerceoperations.component';

describe('EcommerceoperationsComponent', () => {
  let component: EcommerceoperationsComponent;
  let fixture: ComponentFixture<EcommerceoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceoperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
