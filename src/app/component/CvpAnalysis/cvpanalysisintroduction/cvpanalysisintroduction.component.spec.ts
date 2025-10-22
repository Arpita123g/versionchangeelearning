import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisintroductionComponent } from './cvpanalysisintroduction.component';

describe('CvpanalysisintroductionComponent', () => {
  let component: CvpanalysisintroductionComponent;
  let fixture: ComponentFixture<CvpanalysisintroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisintroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
