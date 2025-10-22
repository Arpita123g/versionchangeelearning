import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpcaseheaderComponent } from './cvpcaseheader.component';

describe('CvpcaseheaderComponent', () => {
  let component: CvpcaseheaderComponent;
  let fixture: ComponentFixture<CvpcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
