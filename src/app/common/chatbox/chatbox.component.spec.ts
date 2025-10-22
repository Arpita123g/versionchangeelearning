import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatboxComponent } from './chatbox.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('ChatboxComponent', () => {
  let component: ChatboxComponent;
  let fixture: ComponentFixture<ChatboxComponent>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        ChatboxComponent,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    }).compileComponents();

    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty messages', () => {
    expect(component.messages().length).toBe(0);
  });

  it('should send message when form is submitted', () => {
    const testMessage = 'Test message';
    component.newMessage.set(testMessage);
    
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    
    expect(component.messages().length).toBe(1);
    expect(component.messages()[0].content).toBe(testMessage);
    expect(component.messages()[0].isUser).toBeTrue();
  });

  it('should not send empty message', () => {
    component.newMessage.set('');
    
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    
    expect(component.messages().length).toBe(0);
  });

  it('should handle file selection', () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    const event = { target: { files: [file] } };
    
    component.handleFileSelect(event as any);
    
    expect(component.selectedFile()).toBeTruthy();
    expect(component.selectedFile()?.name).toBe('test.txt');
  });

  it('should remove selected file', () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    component.selectedFile.set(file);
    
    component.removeSelectedFile();
    
    expect(component.selectedFile()).toBeNull();
  });

  it('should format timestamp correctly', () => {
    const date = new Date('2024-01-01T12:00:00');
    const formatted = component.formatTimestamp(date);
    
    expect(formatted).toMatch(/\d{2}:\d{2}/);
  });

  it('should show error message', () => {
    const errorMessage = 'Test error';
    component.error.set(errorMessage);
    fixture.detectChanges();
    
    const errorElement = fixture.debugElement.query(By.css('.error-message'));
    expect(errorElement).toBeTruthy();
    expect(errorElement.nativeElement.textContent).toContain(errorMessage);
  });

  it('should show loading indicator', () => {
    component.isLoading.set(true);
    fixture.detectChanges();
    
    const progressBar = fixture.debugElement.query(By.css('mat-progress-bar'));
    expect(progressBar).toBeTruthy();
  });

  it('should show typing indicator', () => {
    component.isTyping.set(true);
    fixture.detectChanges();
    
    const typingIndicator = fixture.debugElement.query(By.css('.typing-indicator'));
    expect(typingIndicator).toBeTruthy();
  });
});
