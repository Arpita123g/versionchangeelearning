import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimdashboardstructureComponent } from './microsimdashboardstructure.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { of } from 'rxjs';

describe('MicrosimdashboardstructureComponent', () => {
  let component: MicrosimdashboardstructureComponent;
  let fixture: ComponentFixture<MicrosimdashboardstructureComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getStudentDetails']);
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      instructorcarddetails: of({ coursecode: 'TEST123' })
    });

    await TestBed.configureTestingModule({
      imports: [
        MicrosimdashboardstructureComponent,
        NoopAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule
      ],
      providers: [
        { provide: ApiService, useValue: spy },
        { provide: GlobalService, useValue: globalSpy }
      ]
    }).compileComponents();

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimdashboardstructureComponent);
    component = fixture.componentInstance;
    apiServiceSpy.getStudentDetails.and.returnValue(of({
      status: 'Success',
      resultList: []
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty data', () => {
    expect(component.ELEMENT_DATA).toEqual([]);
    expect(component.dataSource.data).toEqual([]);
  });

  it('should fetch data on init', () => {
    expect(apiServiceSpy.getStudentDetails).toHaveBeenCalledWith('coursename', 'TEST123');
  });
});
