import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimcompletedComponent } from './microsimcompleted.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MicrosimcompletedComponent', () => {
  let component: MicrosimcompletedComponent;
  let fixture: ComponentFixture<MicrosimcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MicrosimcompletedComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct game status', () => {
    expect(component.gamestatus).toBe('completed');
  });
});
