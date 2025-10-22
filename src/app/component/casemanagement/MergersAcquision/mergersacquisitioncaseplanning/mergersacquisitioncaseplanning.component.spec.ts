import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncaseplanningComponent } from './mergersacquisitioncaseplanning.component';

describe('MergersacquisitioncaseplanningComponent', () => {
  let component: MergersacquisitioncaseplanningComponent;
  let fixture: ComponentFixture<MergersacquisitioncaseplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncaseplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncaseplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
