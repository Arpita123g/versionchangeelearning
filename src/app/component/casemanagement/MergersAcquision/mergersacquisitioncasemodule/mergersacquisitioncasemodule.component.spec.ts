import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncasemoduleComponent } from './mergersacquisitioncasemodule.component';

describe('MergersacquisitioncasemoduleComponent', () => {
  let component: MergersacquisitioncasemoduleComponent;
  let fixture: ComponentFixture<MergersacquisitioncasemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncasemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncasemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
