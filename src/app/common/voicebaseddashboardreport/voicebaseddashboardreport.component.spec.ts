import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicebaseddashboardreportComponent } from './voicebaseddashboardreport.component';

describe('VoicebaseddashboardreportComponent', () => {
  let component: VoicebaseddashboardreportComponent;
  let fixture: ComponentFixture<VoicebaseddashboardreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicebaseddashboardreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebaseddashboardreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
