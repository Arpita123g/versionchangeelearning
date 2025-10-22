import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationComponent } from './confirmation.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<ConfirmationComponent>>;

  const mockDialogData = {
    title: 'Test Title',
    message: 'Test Message',
    confirmText: 'Yes',
    cancelText: 'No',
    icon: 'warning',
    type: 'warning' as const
  };

  beforeEach(async () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        ConfirmationComponent,
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

    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<ConfirmationComponent>>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
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

  it('should call dialogRef.close with true when confirm is clicked', () => {
    const confirmButton = fixture.nativeElement.querySelector('button[aria-label="Confirm"]');
    confirmButton.click();
    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });

  it('should call dialogRef.close with false when cancel is clicked', () => {
    const cancelButton = fixture.nativeElement.querySelector('button[aria-label="Cancel"]');
    cancelButton.click();
    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should use default values when not provided', () => {
    const componentWithDefaults = new ConfirmationComponent(
      dialogRef,
      { title: 'Test', message: 'Test' }
    );
    expect(componentWithDefaults.data.confirmText).toBe('Confirm');
    expect(componentWithDefaults.data.cancelText).toBe('Cancel');
    expect(componentWithDefaults.data.icon).toBe('help');
    expect(componentWithDefaults.data.type).toBe('info');
  });

  it('should return correct icon color based on type', () => {
    const types = ['warning', 'error', 'success', 'info'] as const;
    const colors = types.map(type => {
      component.data.type = type;
      return component.getIconColor();
    });
    expect(colors).toEqual(['warn', 'warn', 'primary', 'accent']);
  });
});
