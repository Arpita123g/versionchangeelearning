import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteComponent } from './delete.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<DeleteComponent>>;

  const mockDialogData = {
    title: 'Delete Confirmation',
    message: 'Are you sure you want to delete this item?',
    confirmText: 'Delete',
    cancelText: 'Cancel'
  };

  beforeEach(async () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        DeleteComponent,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
      ]
    }).compileComponents();

    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DeleteComponent>>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided title and message', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.dialog-title').textContent).toContain(mockDialogData.title);
    expect(compiled.querySelector('.dialog-content p').textContent).toContain(mockDialogData.message);
  });

  it('should call dialogRef.close with true when delete is clicked', () => {
    const deleteButton = fixture.nativeElement.querySelector('button[aria-label="Delete"]');
    deleteButton.click();
    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });

  it('should call dialogRef.close with false when cancel is clicked', () => {
    const cancelButton = fixture.nativeElement.querySelector('button[aria-label="Cancel"]');
    cancelButton.click();
    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should use default values when not provided', () => {
    const componentWithDefaults = new DeleteComponent(
      dialogRef,
      { title: 'Test', message: 'Test' }
    );
    expect(componentWithDefaults.data.confirmText).toBe('Delete');
    expect(componentWithDefaults.data.cancelText).toBe('Cancel');
  });
});
