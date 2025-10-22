import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercesynopsisComponent } from './ecommercesynopsis.component';

describe('EcommercesynopsisComponent', () => {
  let component: EcommercesynopsisComponent;
  let fixture: ComponentFixture<EcommercesynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercesynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercesynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
