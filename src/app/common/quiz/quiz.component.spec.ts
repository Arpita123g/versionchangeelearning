import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizComponent } from './quiz.component';
import { CommonModule } from '@angular/common';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        QuizComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the coming soon message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Exciting Things Are Coming!');
    expect(compiled.textContent).toContain('Our quiz section is currently under development');
  });
}); 