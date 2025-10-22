import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimongoingComponent } from './microsimongoing.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MicrosimongoingComponent', () => {
  let component: MicrosimongoingComponent;
  let fixture: ComponentFixture<MicrosimongoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MicrosimongoingComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimongoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
