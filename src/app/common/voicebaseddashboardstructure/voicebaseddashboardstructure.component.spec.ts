import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebaseddashboardstructureComponent } from './voicebaseddashboardstructure.component';

describe('VoicebaseddashboardstructureComponent', () => {
  let component: VoicebaseddashboardstructureComponent;
  let fixture: ComponentFixture<VoicebaseddashboardstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebaseddashboardstructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebaseddashboardstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
