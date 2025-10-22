import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilepreviewComponent } from './filepreview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';

describe('FilepreviewComponent', () => {
  let component: FilepreviewComponent;
  let fixture: ComponentFixture<FilepreviewComponent>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FilepreviewComponent,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    sanitizer = TestBed.inject(DomSanitizer);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilepreviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error when no file URL is provided', () => {
    fixture.detectChanges();
    expect(component.error).toBe('No file URL provided');
  });

  it('should load file when URL is provided', () => {
    const testUrl = 'https://example.com/test.pdf';
    component.fileUrl = testUrl;
    component.fileName = 'test.pdf';
    component.fileType = 'pdf';
    
    fixture.detectChanges();
    
    expect(component.safeUrl).toBeTruthy();
    expect(component.isLoading).toBeFalse();
    expect(component.error).toBeNull();
  });

  it('should return correct icon for different file types', () => {
    const testCases = [
      { type: 'pdf', expected: 'picture_as_pdf' },
      { type: 'docx', expected: 'description' },
      { type: 'xlsx', expected: 'table_chart' },
      { type: 'pptx', expected: 'slideshow' },
      { type: 'jpg', expected: 'image' },
      { type: 'txt', expected: 'insert_drive_file' }
    ];

    testCases.forEach(test => {
      component.fileType = test.type;
      expect(component.getFileIcon()).toBe(test.expected);
    });
  });

  it('should open file in new window when downloading', () => {
    const testUrl = 'https://example.com/test.pdf';
    component.fileUrl = testUrl;
    
    const windowSpy = spyOn(window, 'open');
    component.downloadFile();
    
    expect(windowSpy).toHaveBeenCalledWith(testUrl, '_blank');
  });
});
