import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

interface DialogData {
  title: string;
}

interface DialogResult {
  action: 'yes' | 'no';
}

@Component({
  selector: 'app-popup-dialogue',
  templateUrl: './popup-dialogue.component.html',
  styleUrls: ['./popup-dialogue.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class PopupDialogueComponent {
  private readonly _dialogRef = inject(MatDialogRef<PopupDialogueComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onYesClick(): void {
    this._dialogRef.close({ action: 'yes' } as DialogResult);
  }

  onNoClick(): void {
    this._dialogRef.close({ action: 'no' } as DialogResult);
  }
}
