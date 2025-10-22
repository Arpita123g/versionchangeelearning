import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpanalysisfoodforthoughtComponent } from './cvpanalysisfoodforthought.component';

describe('CvpanalysisfoodforthoughtComponent', () => {
  let component: CvpanalysisfoodforthoughtComponent;
  let fixture: ComponentFixture<CvpanalysisfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpanalysisfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpanalysisfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
