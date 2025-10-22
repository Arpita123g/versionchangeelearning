import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascismarketingComponent } from './businessbascismarketing.component';

describe('BusinessbascismarketingComponent', () => {
  let component: BusinessbascismarketingComponent;
  let fixture: ComponentFixture<BusinessbascismarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascismarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascismarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
