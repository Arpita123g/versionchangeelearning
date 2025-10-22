import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewgamecreateComponent } from './interviewgamecreate.component';

describe('InterviewgamecreateComponent', () => {
  let component: InterviewgamecreateComponent;
  let fixture: ComponentFixture<InterviewgamecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewgamecreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewgamecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
