import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamesupplyforecastingComponent } from './hrpgamesupplyforecasting.component';

describe('HrpgamesupplyforecastingComponent', () => {
  let component: HrpgamesupplyforecastingComponent;
  let fixture: ComponentFixture<HrpgamesupplyforecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamesupplyforecastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamesupplyforecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
