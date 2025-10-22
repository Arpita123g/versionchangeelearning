import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncasenegotiationComponent } from './mergersacquisitioncasenegotiation.component';

describe('MergersacquisitioncasenegotiationComponent', () => {
  let component: MergersacquisitioncasenegotiationComponent;
  let fixture: ComponentFixture<MergersacquisitioncasenegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncasenegotiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncasenegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
