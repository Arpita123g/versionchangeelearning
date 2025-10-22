import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebaseddashboardsettingsComponent } from './voicebaseddashboardsettings.component';

describe('VoicebaseddashboardsettingsComponent', () => {
  let component: VoicebaseddashboardsettingsComponent;
  let fixture: ComponentFixture<VoicebaseddashboardsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebaseddashboardsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebaseddashboardsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
