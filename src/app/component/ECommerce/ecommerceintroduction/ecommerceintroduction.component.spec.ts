import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceintroductionComponent } from './ecommerceintroduction.component';

describe('EcommerceintroductionComponent', () => {
  let component: EcommerceintroductionComponent;
  let fixture: ComponentFixture<EcommerceintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
