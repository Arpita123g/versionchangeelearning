import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivetablecomponentComponent } from './drivetablecomponent.component';

describe('DrivetablecomponentComponent', () => {
  let component: DrivetablecomponentComponent;
  let fixture: ComponentFixture<DrivetablecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivetablecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivetablecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
