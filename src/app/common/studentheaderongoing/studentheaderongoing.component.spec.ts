import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentheaderongoingComponent } from './studentheaderongoing.component';
import { GlobalService } from '../../service/global.service';
import { BehaviorSubject } from 'rxjs';

describe('StudentheaderongoingComponent', () => {
  let component: StudentheaderongoingComponent;
  let fixture: ComponentFixture<StudentheaderongoingComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('GlobalService', ['microvoicetab']);
    spy.microvoicetab = new BehaviorSubject<string>('');

    await TestBed.configureTestingModule({
      imports: [StudentheaderongoingComponent],
      providers: [
        { provide: GlobalService, useValue: spy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentheaderongoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.headertab()).toBe('Ongoing');
    expect(component.microsubtab()).toBe('ongoing');
    expect(component.voicesubtab()).toBe('ongoing');
    expect(component.activetab()).toBe('microsim');
  });

  it('should update activetab when tabclick is called', () => {
    const newTab = 'newtab';
    component.tabclick(newTab);
    expect(component.activetab()).toBe(newTab);
    expect(globalServiceSpy.microvoicetab.next).toHaveBeenCalledWith(newTab);
  });

  it('should update voicesubtab when voicesubtabclick is called', () => {
    const newTab = 'newtab';
    component.voicesubtabclick(newTab);
    expect(component.voicesubtab()).toBe(newTab);
  });

  it('should update microsubtab when microsubtabclick is called', () => {
    const newTab = 'newtab';
    component.microsubtabclick(newTab);
    expect(component.microsubtab()).toBe(newTab);
  });
});
