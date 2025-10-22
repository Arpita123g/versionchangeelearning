import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgameanalysisandplanningComponent } from './hrpgameanalysisandplanning.component';

describe('HrpgameanalysisandplanningComponent', () => {
  let component: HrpgameanalysisandplanningComponent;
  let fixture: ComponentFixture<HrpgameanalysisandplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgameanalysisandplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgameanalysisandplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
