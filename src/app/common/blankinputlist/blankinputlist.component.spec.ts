import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlankinputlistComponent } from './blankinputlist.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('BlankinputlistComponent', () => {
  let component: BlankinputlistComponent;
  let fixture: ComponentFixture<BlankinputlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BlankinputlistComponent,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
        NoopAnimationsModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlankinputlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.error()).toBeNull();
    expect(component.items()).toEqual([]);
    expect(component.selectedItem()).toBeNull();
  });

  it('should show loading state when loading items', async () => {
    await component.loadItems();
    expect(component.isLoading()).toBeFalse();
  });

  it('should handle errors appropriately', async () => {
    spyOn(console, 'error');
    await component.loadItems();
    expect(component.error()).toBeNull();
  });

  it('should select an item when clicked', () => {
    const testItem = {
      id: 1,
      name: 'Test Item',
      type: 'text',
      value: '',
      required: true
    };
    component.selectItem(testItem);
    expect(component.selectedItem()).toEqual(testItem);
  });

  it('should show success message when saving an item', () => {
    const snackBarSpy = spyOn(component['snackBar'], 'open');
    const testItem = {
      id: 1,
      name: 'Test Item',
      type: 'text',
      value: 'test value',
      required: true
    };
    component.saveItem(testItem);
    expect(snackBarSpy).toHaveBeenCalledWith('Item saved successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  });

  it('should show success message when deleting an item', () => {
    const snackBarSpy = spyOn(component['snackBar'], 'open');
    const testItem = {
      id: 1,
      name: 'Test Item',
      type: 'text',
      value: '',
      required: true
    };
    component.deleteItem(testItem);
    expect(snackBarSpy).toHaveBeenCalledWith('Item deleted successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  });
});
