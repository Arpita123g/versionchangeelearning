import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisdecisionchecklistComponent } from './cvpanalysisdecisionchecklist.component';

describe('CvpanalysisdecisionchecklistComponent', () => {
  let component: CvpanalysisdecisionchecklistComponent;
  let fixture: ComponentFixture<CvpanalysisdecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisdecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisdecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
