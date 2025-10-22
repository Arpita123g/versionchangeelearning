import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmarketingComponent } from './businessmarketing.component';

describe('BusinessmarketingComponent', () => {
  let component: BusinessmarketingComponent;
  let fixture: ComponentFixture<BusinessmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessmarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
