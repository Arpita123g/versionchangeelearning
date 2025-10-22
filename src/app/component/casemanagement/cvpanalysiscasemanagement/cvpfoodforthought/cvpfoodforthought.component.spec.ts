import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpfoodforthoughtComponent } from './cvpfoodforthought.component';

describe('CvpfoodforthoughtComponent', () => {
  let component: CvpfoodforthoughtComponent;
  let fixture: ComponentFixture<CvpfoodforthoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpfoodforthoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpfoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
