import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercemarketComponent } from './ecommercemarket.component';

describe('EcommercemarketComponent', () => {
  let component: EcommercemarketComponent;
  let fixture: ComponentFixture<EcommercemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
