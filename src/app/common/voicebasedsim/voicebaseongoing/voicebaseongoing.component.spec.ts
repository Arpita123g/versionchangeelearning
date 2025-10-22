import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebaseongoingComponent } from './voicebaseongoing.component';

describe('VoicebaseongoingComponent', () => {
  let component: VoicebaseongoingComponent;
  let fixture: ComponentFixture<VoicebaseongoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebaseongoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebaseongoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
