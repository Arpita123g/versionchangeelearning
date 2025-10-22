import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionreportComponent } from './mergersacquisitionreport.component';

describe('MergersacquisitionreportComponent', () => {
  let component: MergersacquisitionreportComponent;
  let fixture: ComponentFixture<MergersacquisitionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
