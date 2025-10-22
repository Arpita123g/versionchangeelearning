import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitiondecisionchecklistComponent } from './mergersacquisitiondecisionchecklist.component';

describe('MergersacquisitiondecisionchecklistComponent', () => {
  let component: MergersacquisitiondecisionchecklistComponent;
  let fixture: ComponentFixture<MergersacquisitiondecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitiondecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitiondecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
