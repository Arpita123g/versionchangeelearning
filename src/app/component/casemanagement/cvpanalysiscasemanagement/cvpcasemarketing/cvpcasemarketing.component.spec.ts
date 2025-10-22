import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpcasemarketingComponent } from './cvpcasemarketing.component';

describe('CvpcasemarketingComponent', () => {
  let component: CvpcasemarketingComponent;
  let fixture: ComponentFixture<CvpcasemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpcasemarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpcasemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
