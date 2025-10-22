import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamereportComponent } from './hrpgamereport.component';

describe('HrpgamereportComponent', () => {
  let component: HrpgamereportComponent;
  let fixture: ComponentFixture<HrpgamereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
