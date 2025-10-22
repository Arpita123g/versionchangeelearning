import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimarchiveComponent } from './microsimarchive.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MicrosimarchiveComponent', () => {
  let component: MicrosimarchiveComponent;
  let fixture: ComponentFixture<MicrosimarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MicrosimarchiveComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct game status', () => {
    expect(component.gamestatus).toBe('archive');
  });
});
