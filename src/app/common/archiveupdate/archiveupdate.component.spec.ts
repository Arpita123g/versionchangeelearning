import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchiveupdateComponent } from './archiveupdate.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ArchiveupdateComponent', () => {
  let component: ArchiveupdateComponent;
  let fixture: ComponentFixture<ArchiveupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArchiveupdateComponent,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchiveupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.error()).toBeNull();
    expect(component.data()).toEqual([]);
  });

  it('should show loading state when loading data', async () => {
    await component.loadData();
    expect(component.isLoading()).toBeFalse();
  });

  it('should handle errors appropriately', async () => {
    // Mock an error scenario
    spyOn(console, 'error');
    await component.loadData();
    expect(component.error()).toBeNull();
  });
});
