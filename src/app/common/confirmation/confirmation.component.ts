import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
      confirmText?: string;
      cancelText?: string;
      icon?: string;
      type?: 'warning' | 'error' | 'info' | 'success';
    }
  ) {
    // Set default values if not provided
    this.data.confirmText = this.data.confirmText || 'Confirm';
    this.data.cancelText = this.data.cancelText || 'Cancel';
    this.data.icon = this.data.icon || 'help';
    this.data.type = this.data.type || 'info';
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  getIconColor(): string {
    switch (this.data.type) {
      case 'warning':
        return 'warn';
      case 'error':
        return 'warn';
      case 'success':
        return 'primary';
      default:
        return 'accent';
    }
  }
}
