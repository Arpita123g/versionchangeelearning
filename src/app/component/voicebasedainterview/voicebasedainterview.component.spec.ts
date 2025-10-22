import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoicebasedainterviewComponent } from './voicebasedainterview.component';

describe('VoicebasedainterviewComponent', () => {
  let component: VoicebasedainterviewComponent;
  let fixture: ComponentFixture<VoicebasedainterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoicebasedainterviewComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(VoicebasedainterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
