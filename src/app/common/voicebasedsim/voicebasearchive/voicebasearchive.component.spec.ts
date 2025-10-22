import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebasearchiveComponent } from './voicebasearchive.component';

describe('VoicebasearchiveComponent', () => {
  let component: VoicebasearchiveComponent;
  let fixture: ComponentFixture<VoicebasearchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebasearchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebasearchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
