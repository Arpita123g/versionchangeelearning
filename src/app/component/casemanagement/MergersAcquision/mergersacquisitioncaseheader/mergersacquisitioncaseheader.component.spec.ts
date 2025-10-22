import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitioncaseheaderComponent } from './mergersacquisitioncaseheader.component';

describe('MergersacquisitioncaseheaderComponent', () => {
  let component: MergersacquisitioncaseheaderComponent;
  let fixture: ComponentFixture<MergersacquisitioncaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitioncaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitioncaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
