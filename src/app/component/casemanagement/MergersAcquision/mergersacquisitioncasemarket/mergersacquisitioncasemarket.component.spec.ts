import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncasemarketComponent } from './mergersacquisitioncasemarket.component';

describe('MergersacquisitioncasemarketComponent', () => {
  let component: MergersacquisitioncasemarketComponent;
  let fixture: ComponentFixture<MergersacquisitioncasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
