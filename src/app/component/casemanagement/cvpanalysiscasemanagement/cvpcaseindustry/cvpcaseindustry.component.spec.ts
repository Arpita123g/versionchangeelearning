import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpcaseindustryComponent } from './cvpcaseindustry.component';

describe('CvpcaseindustryComponent', () => {
  let component: CvpcaseindustryComponent;
  let fixture: ComponentFixture<CvpcaseindustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpcaseindustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpcaseindustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
