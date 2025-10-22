import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamedecisionchecklistComponent } from './hrpgamedecisionchecklist.component';

describe('HrpgamedecisionchecklistComponent', () => {
  let component: HrpgamedecisionchecklistComponent;
  let fixture: ComponentFixture<HrpgamedecisionchecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamedecisionchecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamedecisionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
