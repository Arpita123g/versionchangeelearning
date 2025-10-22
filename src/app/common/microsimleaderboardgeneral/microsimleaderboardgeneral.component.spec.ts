import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimleaderboardgeneralComponent } from './microsimleaderboardgeneral.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('MicrosimleaderboardgeneralComponent', () => {
  let component: MicrosimleaderboardgeneralComponent;
  let fixture: ComponentFixture<MicrosimleaderboardgeneralComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getStudentDetails']);
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      useremail: of('test@example.com'),
      coursecode: of('TEST123'),
      instructorcarddetails: of({ coursecode: 'TEST123' })
    });
    const loginSpy = jasmine.createSpyObj('LoginService', ['']);
    const restapiSpy = jasmine.createSpyObj('RestapiService', ['']);
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        MicrosimleaderboardgeneralComponent,
        NoopAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        NgApexchartsModule
      ],
      providers: [
        { provide: ApiService, useValue: spy },
        { provide: GlobalService, useValue: globalSpy },
        { provide: LoginService, useValue: loginSpy },
        { provide: RestapiService, useValue: restapiSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimleaderboardgeneralComponent);
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

  it('should calculate rank correctly', () => {
    const rank = component.calculateRank(0);
    expect(rank).toBe(1);
  });

  it('should handle page changes', () => {
    const event = { pageIndex: 1, pageSize: 10 } as any;
    component.onPageChange(event);
    expect(component.currentPage).toBe(1);
    expect(component.pageSize).toBe(10);
  });
});
