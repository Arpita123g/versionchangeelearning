import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisdecisionsynopsisComponent } from './cvpanalysisdecisionsynopsis.component';

describe('CvpanalysisdecisionsynopsisComponent', () => {
  let component: CvpanalysisdecisionsynopsisComponent;
  let fixture: ComponentFixture<CvpanalysisdecisionsynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisdecisionsynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisdecisionsynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
