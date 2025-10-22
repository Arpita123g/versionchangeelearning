import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-filepreview',
  templateUrl: './filepreview.component.html',
  styleUrls: ['./filepreview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class FilepreviewComponent implements OnInit {
  @Input() fileUrl: string = '';
  @Input() fileName: string = '';
  @Input() fileType: string = '';
  
  safeUrl: SafeResourceUrl | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadFile();
  }

  private loadFile() {
    try {
      if (this.fileUrl) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl);
        this.isLoading = false;
      } else {
        this.error = 'No file URL provided';
        this.isLoading = false;
      }
    } catch (err) {
      this.error = 'Error loading file';
      this.isLoading = false;
    }
  }

  getFileIcon(): string {
    switch (this.fileType.toLowerCase()) {
      case 'pdf':
        return 'picture_as_pdf';
      case 'doc':
      case 'docx':
        return 'description';
      case 'xls':
      case 'xlsx':
        return 'table_chart';
      case 'ppt':
      case 'pptx':
        return 'slideshow';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image';
      default:
        return 'insert_drive_file';
    }
  }

  downloadFile() {
    if (this.fileUrl) {
      window.open(this.fileUrl, '_blank');
    }
  }
}


// export interface DialogData {
// }
