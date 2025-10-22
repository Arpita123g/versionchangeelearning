import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisdecisionreportComponent } from './cvpanalysisdecisionreport.component';

describe('CvpanalysisdecisionreportComponent', () => {
  let component: CvpanalysisdecisionreportComponent;
  let fixture: ComponentFixture<CvpanalysisdecisionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisdecisionreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisdecisionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
