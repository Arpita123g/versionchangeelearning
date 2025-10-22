import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionplanningComponent } from './mergersacquisitionplanning.component';

describe('MergersacquisitionplanningComponent', () => {
  let component: MergersacquisitionplanningComponent;
  let fixture: ComponentFixture<MergersacquisitionplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
