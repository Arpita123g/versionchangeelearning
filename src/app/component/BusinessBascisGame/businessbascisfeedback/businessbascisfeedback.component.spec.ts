import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbascisfeedbackComponent } from './businessbascisfeedback.component';

describe('BusinessbascisfeedbackComponent', () => {
  let component: BusinessbascisfeedbackComponent;
  let fixture: ComponentFixture<BusinessbascisfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbascisfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbascisfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
