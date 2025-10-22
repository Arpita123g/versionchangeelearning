import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisproductionComponent } from './cvpanalysisproduction.component';

describe('CvpanalysisproductionComponent', () => {
  let component: CvpanalysisproductionComponent;
  let fixture: ComponentFixture<CvpanalysisproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
