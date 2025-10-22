import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncasefinancingComponent } from './mergersacquisitioncasefinancing.component';

describe('MergersacquisitioncasefinancingComponent', () => {
  let component: MergersacquisitioncasefinancingComponent;
  let fixture: ComponentFixture<MergersacquisitioncasefinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncasefinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncasefinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
