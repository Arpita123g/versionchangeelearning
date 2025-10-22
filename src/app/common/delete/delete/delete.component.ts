import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class DeleteComponent {
  constructor(
    private cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // Set default values if not provided
    this.data.confirmText = this.data.confirmText || 'Delete';
    this.data.cancelText = this.data.cancelText || 'Cancel';
  }

  confirm(ok: boolean) {
    this.dialogRef.close(ok);
    this.cdr.detectChanges(); // Close the dialog on first click
  }
}
