import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysismarketingComponent } from './cvpanalysismarketing.component';

describe('CvpanalysismarketingComponent', () => {
  let component: CvpanalysismarketingComponent;
  let fixture: ComponentFixture<CvpanalysismarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysismarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysismarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
