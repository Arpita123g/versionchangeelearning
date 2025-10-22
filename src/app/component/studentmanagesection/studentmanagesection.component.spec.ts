import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanagesectionComponent } from './studentmanagesection.component';

describe('StudentmanagesectionComponent', () => {
  let component: StudentmanagesectionComponent;
  let fixture: ComponentFixture<StudentmanagesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmanagesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanagesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
