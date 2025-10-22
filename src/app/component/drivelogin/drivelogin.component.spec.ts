import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveloginComponent } from './drivelogin.component';

describe('DriveloginComponent', () => {
  let component: DriveloginComponent;
  let fixture: ComponentFixture<DriveloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
