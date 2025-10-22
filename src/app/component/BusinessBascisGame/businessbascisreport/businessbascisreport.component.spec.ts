import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisreportComponent } from './businessbascisreport.component';

describe('BusinessbascisreportComponent', () => {
  let component: BusinessbascisreportComponent;
  let fixture: ComponentFixture<BusinessbascisreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
