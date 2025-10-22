import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionpreliminaryassessmentsComponent } from './mergersacquisitionpreliminaryassessments.component';

describe('MergersacquisitionpreliminaryassessmentsComponent', () => {
  let component: MergersacquisitionpreliminaryassessmentsComponent;
  let fixture: ComponentFixture<MergersacquisitionpreliminaryassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionpreliminaryassessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionpreliminaryassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
