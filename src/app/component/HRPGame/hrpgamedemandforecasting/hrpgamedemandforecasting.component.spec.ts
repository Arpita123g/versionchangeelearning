import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamedemandforecastingComponent } from './hrpgamedemandforecasting.component';

describe('HrpgamedemandforecastingComponent', () => {
  let component: HrpgamedemandforecastingComponent;
  let fixture: ComponentFixture<HrpgamedemandforecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamedemandforecastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamedemandforecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
