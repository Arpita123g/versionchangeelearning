import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncaseassessmentComponent } from './mergersacquisitioncaseassessment.component';

describe('MergersacquisitioncaseassessmentComponent', () => {
  let component: MergersacquisitioncaseassessmentComponent;
  let fixture: ComponentFixture<MergersacquisitioncaseassessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncaseassessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncaseassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
