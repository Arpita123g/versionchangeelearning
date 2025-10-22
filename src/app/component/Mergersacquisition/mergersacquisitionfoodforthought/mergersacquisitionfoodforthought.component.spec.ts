import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionfoodforthoughtComponent } from './mergersacquisitionfoodforthought.component';

describe('MergersacquisitionfoodforthoughtComponent', () => {
  let component: MergersacquisitionfoodforthoughtComponent;
  let fixture: ComponentFixture<MergersacquisitionfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
