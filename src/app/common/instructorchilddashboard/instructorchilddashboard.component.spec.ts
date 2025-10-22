import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorchilddashboardComponent } from './instructorchilddashboard.component';

describe('InstructorchilddashboardComponent', () => {
  let component: InstructorchilddashboardComponent;
  let fixture: ComponentFixture<InstructorchilddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorchilddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorchilddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
