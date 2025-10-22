import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebasecompletedComponent } from './voicebasecompleted.component';

describe('VoicebasecompletedComponent', () => {
  let component: VoicebasecompletedComponent;
  let fixture: ComponentFixture<VoicebasecompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebasecompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebasecompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
