import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisheaderComponent } from './cvpanalysisheader.component';

describe('CvpanalysisheaderComponent', () => {
  let component: CvpanalysisheaderComponent;
  let fixture: ComponentFixture<CvpanalysisheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
