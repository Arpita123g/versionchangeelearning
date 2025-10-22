import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamesynopsisComponent } from './hrpgamesynopsis.component';

describe('HrpgamesynopsisComponent', () => {
  let component: HrpgamesynopsisComponent;
  let fixture: ComponentFixture<HrpgamesynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamesynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamesynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
