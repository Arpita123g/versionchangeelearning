import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysismarketComponent } from './cvpanalysismarket.component';

describe('CvpanalysismarketComponent', () => {
  let component: CvpanalysismarketComponent;
  let fixture: ComponentFixture<CvpanalysismarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysismarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysismarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
