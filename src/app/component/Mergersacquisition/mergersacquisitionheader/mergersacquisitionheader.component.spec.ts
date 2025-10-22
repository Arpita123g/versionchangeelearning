import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersacquisitionheaderComponent } from './mergersacquisitionheader.component';

describe('MergersacquisitionheaderComponent', () => {
  let component: MergersacquisitionheaderComponent;
  let fixture: ComponentFixture<MergersacquisitionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersacquisitionheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersacquisitionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
