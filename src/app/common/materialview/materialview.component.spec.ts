import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialviewComponent } from './materialview.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { BehaviorSubject } from 'rxjs';

describe('MaterialviewComponent', () => {
  let component: MaterialviewComponent;
  let fixture: ComponentFixture<MaterialviewComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['fetchMaterialData']);
    globalServiceSpy = jasmine.createSpyObj('GlobalService', [], {
      instructorcarddetails: new BehaviorSubject({
        courseDetails: {
          simulation: 'Business Basics'
        }
      })
    });

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MaterialviewComponent
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: GlobalService, useValue: globalServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.instructormaterialList().length).toBeGreaterThan(0);
    expect(component.adminmaterialList().length).toBeGreaterThan(0);
    expect(component.doublecall()).toBeFalse();
  });

  it('should update material URLs based on game name', () => {
    expect(component.gamename()).toBe('Business Basics');
    expect(component.instructormaterialList()[0].fileurl).toContain('Business Basics.pdf');
  });

  it('should fetch material data on init', () => {
    expect(apiServiceSpy.fetchMaterialData).toHaveBeenCalledWith(
      'webinstructor',
      'instructor',
      'simulationname',
      'Business Basics',
      'instructor',
      '/material/fetchmaterial'
    );
  });

  it('should open file in new window when fileview is called', () => {
    const windowSpy = spyOn(window, 'open');
    const testUrl = 'https://example.com/test.pdf';
    component.fileview(testUrl);
    expect(windowSpy).toHaveBeenCalledWith(testUrl, '_blank');
  });

  it('should not open window when fileview is called with empty url', () => {
    const windowSpy = spyOn(window, 'open');
    component.fileview('');
    expect(windowSpy).not.toHaveBeenCalled();
  });
});
