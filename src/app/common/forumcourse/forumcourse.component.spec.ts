import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumcourseComponent } from './forumcourse.component';

describe('ForumcourseComponent', () => {
  let component: ForumcourseComponent;
  let fixture: ComponentFixture<ForumcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
