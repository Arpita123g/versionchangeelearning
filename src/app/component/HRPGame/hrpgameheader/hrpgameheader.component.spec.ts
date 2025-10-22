import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgameheaderComponent } from './hrpgameheader.component';

describe('HrpgameheaderComponent', () => {
  let component: HrpgameheaderComponent;
  let fixture: ComponentFixture<HrpgameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgameheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
