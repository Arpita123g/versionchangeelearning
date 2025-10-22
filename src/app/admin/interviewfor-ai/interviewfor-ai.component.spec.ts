import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewforAIComponent } from './interviewfor-ai.component';

describe('InterviewforAIComponent', () => {
  let component: InterviewforAIComponent;
  let fixture: ComponentFixture<InterviewforAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewforAIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewforAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
