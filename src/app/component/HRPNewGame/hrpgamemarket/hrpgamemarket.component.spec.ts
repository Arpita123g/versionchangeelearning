import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpgamemarketComponent } from './hrpgamemarket.component';

describe('HrpgamemarketComponent', () => {
  let component: HrpgamemarketComponent;
  let fixture: ComponentFixture<HrpgamemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrpgamemarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpgamemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
