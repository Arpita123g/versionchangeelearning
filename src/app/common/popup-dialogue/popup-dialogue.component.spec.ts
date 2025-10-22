import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupDialogueComponent } from './popup-dialogue.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

describe('PopupDialogueComponent', () => {
  let component: PopupDialogueComponent;
  let fixture: ComponentFixture<PopupDialogueComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<PopupDialogueComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatDialogModule,
        PopupDialogueComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { title: 'Test Title' } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title from dialog data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Title');
  });

  it('should close with yes action when yes button is clicked', () => {
    component.onYesClick();
    expect(dialogRefSpy.close).toHaveBeenCalledWith({ action: 'yes' });
  });

  it('should close with no action when no button is clicked', () => {
    component.onNoClick();
    expect(dialogRefSpy.close).toHaveBeenCalledWith({ action: 'no' });
  });
});
