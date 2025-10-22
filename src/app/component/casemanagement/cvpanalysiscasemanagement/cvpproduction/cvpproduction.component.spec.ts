import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpproductionComponent } from './cvpproduction.component';

describe('CvpproductionComponent', () => {
  let component: CvpproductionComponent;
  let fixture: ComponentFixture<CvpproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
