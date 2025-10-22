import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpcasemarketComponent } from './cvpcasemarket.component';

describe('CvpcasemarketComponent', () => {
  let component: CvpcasemarketComponent;
  let fixture: ComponentFixture<CvpcasemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpcasemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpcasemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
