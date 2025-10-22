import { Component, inject, signal, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GlobalService } from '../../service/global.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class ConfirmDialogComponent implements OnDestroy {
  // Angular 17 inject() function for dependency injection
  private readonly _global = inject(GlobalService);
  public readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  public readonly data = inject(MAT_DIALOG_DATA);

  // Angular 17 signals for reactive state management
  public readonly usertype = signal<string>('');
  public readonly title = signal<string>('');
  public readonly message = signal<string>('');

  // Computed properties
  public readonly isStudent = computed(() => this.usertype() === 'student');
  public readonly isInstructor = computed(() => this.usertype() === 'instructor');

  constructor() {
    // Setup subscription with takeUntilDestroyed for automatic cleanup
    this._global.loginmode
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this.usertype.set(data);
      });

    // Update view with given values
    this.title.set(this.data.title);
    this.message.set(this.data.message);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed() handles cleanup automatically
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
