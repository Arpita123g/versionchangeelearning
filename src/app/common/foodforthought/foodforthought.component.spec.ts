import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FoodforthoughtComponent } from './foodforthought.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';

describe('FoodforthoughtComponent', () => {
  let component: FoodforthoughtComponent;
  let fixture: ComponentFixture<FoodforthoughtComponent>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatMenuModule,
        MatTooltipModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTreeModule,
        MatGridListModule,
        MatRippleModule,
        FoodforthoughtComponent
      ],
      providers: [
        { provide: MatSnackBar, useValue: snackBarSpy },
        { provide: MatDialog, useValue: dialogSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodforthoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty thoughts array', () => {
    expect(component.thoughts()).toEqual([]);
  });

  it('should show loading state when loading thoughts', () => {
    component.loadThoughts();
    expect(component.isLoading()).toBeTrue();
  });

  it('should add a new thought', () => {
    const thoughtInput = fixture.debugElement.query(By.css('input[matInput]'));
    thoughtInput.nativeElement.value = 'Test thought';
    thoughtInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const addButton = fixture.debugElement.query(By.css('button[matSuffix]'));
    addButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.thoughts().length).toBe(1);
    expect(component.thoughts()[0].title).toBe('Test thought');
  });

  it('should like a thought', () => {
    const thought = {
      id: 1,
      title: 'Test thought',
      content: 'Test content',
      category: 'General',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublic: true,
      likes: 0,
      comments: []
    };

    component.thoughts.set([thought]);
    component.likeThought(thought);
    expect(component.thoughts()[0].likes).toBe(1);
  });

  it('should add a comment to a thought', () => {
    const thought = {
      id: 1,
      title: 'Test thought',
      content: 'Test content',
      category: 'General',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublic: true,
      likes: 0,
      comments: []
    };

    component.thoughts.set([thought]);
    component.addComment(thought, 'Test comment');
    expect(component.thoughts()[0].comments.length).toBe(1);
    expect(component.thoughts()[0].comments[0].content).toBe('Test comment');
  });

  it('should filter thoughts by category', () => {
    const thoughts = [
      {
        id: 1,
        title: 'Test thought 1',
        content: 'Test content 1',
        category: 'General',
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublic: true,
        likes: 0,
        comments: []
      },
      {
        id: 2,
        title: 'Test thought 2',
        content: 'Test content 2',
        category: 'Business',
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        isPublic: true,
        likes: 0,
        comments: []
      }
    ];

    component.thoughts.set(thoughts);
    component.selectedCategory.set('Business');
    expect(component.filteredThoughts().length).toBe(1);
    expect(component.filteredThoughts()[0].category).toBe('Business');
  });

  it('should sort thoughts by date', () => {
    const thoughts = [
      {
        id: 1,
        title: 'Test thought 1',
        content: 'Test content 1',
        category: 'General',
        tags: [],
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        isPublic: true,
        likes: 0,
        comments: []
      },
      {
        id: 2,
        title: 'Test thought 2',
        content: 'Test content 2',
        category: 'General',
        tags: [],
        createdAt: new Date('2023-01-02'),
        updatedAt: new Date('2023-01-02'),
        isPublic: true,
        likes: 0,
        comments: []
      }
    ];

    component.thoughts.set(thoughts);
    component.sortBy.set('date');
    component.sortOrder.set('desc');
    expect(component.filteredThoughts()[0].id).toBe(2);
  });
});
