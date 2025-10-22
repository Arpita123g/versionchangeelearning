import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisdemandComponent } from './businessbascisdemand.component';

describe('BusinessbascisdemandComponent', () => {
  let component: BusinessbascisdemandComponent;
  let fixture: ComponentFixture<BusinessbascisdemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisdemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
