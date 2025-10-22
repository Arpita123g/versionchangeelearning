import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisreadingComponent } from './businessbascisreading.component';

describe('BusinessbascisreadingComponent', () => {
  let component: BusinessbascisreadingComponent;
  let fixture: ComponentFixture<BusinessbascisreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisreadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
