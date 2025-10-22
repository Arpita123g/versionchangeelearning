import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncasefoodforthoughtComponent } from './mergersacquisitioncasefoodforthought.component';

describe('MergersacquisitioncasefoodforthoughtComponent', () => {
  let component: MergersacquisitioncasefoodforthoughtComponent;
  let fixture: ComponentFixture<MergersacquisitioncasefoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncasefoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncasefoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
