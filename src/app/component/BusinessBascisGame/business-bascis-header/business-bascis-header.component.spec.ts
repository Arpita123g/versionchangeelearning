import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBascisHeaderComponent } from './business-bascis-header.component';

describe('BusinessBascisHeaderComponent', () => {
  let component: BusinessBascisHeaderComponent;
  let fixture: ComponentFixture<BusinessBascisHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBascisHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBascisHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
