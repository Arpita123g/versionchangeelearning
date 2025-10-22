import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionsynopsisComponent } from './mergersacquisitionsynopsis.component';

describe('MergersacquisitionsynopsisComponent', () => {
  let component: MergersacquisitionsynopsisComponent;
  let fixture: ComponentFixture<MergersacquisitionsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
