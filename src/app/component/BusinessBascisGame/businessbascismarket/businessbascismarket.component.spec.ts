import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascismarketComponent } from './businessbascismarket.component';

describe('BusinessbascismarketComponent', () => {
  let component: BusinessbascismarketComponent;
  let fixture: ComponentFixture<BusinessbascismarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascismarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascismarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
