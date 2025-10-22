import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpmoduleComponent } from './cvpmodule.component';

describe('CvpmoduleComponent', () => {
  let component: CvpmoduleComponent;
  let fixture: ComponentFixture<CvpmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvpmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
