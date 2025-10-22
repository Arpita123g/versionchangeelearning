import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCourseComponent } from './createcourse.component';

// import { CreategameComponent } from './createcourse.component';

describe('CreategameComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
