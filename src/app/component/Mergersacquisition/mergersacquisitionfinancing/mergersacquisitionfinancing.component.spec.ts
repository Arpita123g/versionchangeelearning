import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionfinancingComponent } from './mergersacquisitionfinancing.component';

describe('MergersacquisitionfinancingComponent', () => {
  let component: MergersacquisitionfinancingComponent;
  let fixture: ComponentFixture<MergersacquisitionfinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionfinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionfinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
